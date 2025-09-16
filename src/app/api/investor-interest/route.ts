import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { fullName, email, firm, message } = body;
    
    // Validate required fields
    if (!fullName || !email || !firm || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Investor Interest - CuraX AI

Contact Information:
- Full Name: ${fullName}
- Email: ${email}
- Firm: ${firm}
- Investor Type: ${investorType || 'Not specified'}
- Message: ${message}

This form submission was sent to k.adam@tulwegroup.com only
    `.trim();

    // Log the email content (in production, you would send actual emails)
    console.log('Investor Interest Email Content:');
    console.log(emailContent);
    console.log('Recipient: k.adam@tulwegroup.com');

    // In a real implementation, you would use a service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer
    // - Resend
    // to send actual emails to the specified addresses

    return NextResponse.json(
      { 
        message: 'Investor interest submitted successfully',
        recipients: ['k.adam@tulwegroup.com']
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing investor interest:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}