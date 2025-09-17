import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { fullName, email, organization, partnershipType, message } = body;
    
    // Validate required fields
    if (!fullName || !email || !organization || !partnershipType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Strategic Partnership Interest - CuraX AI

Contact Information:
- Full Name: ${fullName}
- Email: ${email}
- Organization: ${organization}
- Partnership Type: ${partnershipType}
- Message: ${message}

This form submission was sent to both k.adam@tulwegroup.com and info@tulwegroup.com
    `.trim();

    // Log the email content (in production, you would send actual emails)
    console.log('Partner Interest Email Content:');
    console.log(emailContent);
    console.log('Recipients: k.adam@tulwegroup.com, info@tulwegroup.com');

    // In a real implementation, you would use a service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer
    // - Resend
    // to send actual emails to the specified addresses

    return NextResponse.json(
      { 
        message: 'Partner interest submitted successfully',
        recipients: ['k.adam@tulwegroup.com', 'info@tulwegroup.com']
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing partner interest:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}