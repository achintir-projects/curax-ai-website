import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { fullName, email, familySize, primaryInterest, message } = body;
    
    // Validate required fields
    if (!fullName || !email || !familySize || !primaryInterest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Family Early Access Signup - CuraX AI

Contact Information:
- Full Name: ${fullName}
- Email: ${email}
- Family Size: ${familySize}
- Primary Interest: ${primaryInterest}
- Message: ${message || 'No additional message provided'}

This form submission was sent to both k.adam@tulwegroup.com and hr@tulwegroup.com
    `.trim();

    // Log the email content (in production, you would send actual emails)
    console.log('Family Signup Email Content:');
    console.log(emailContent);
    console.log('Recipients: k.adam@tulwegroup.com, hr@tulwegroup.com');

    // In a real implementation, you would use a service like:
    // - SendGrid
    // - AWS SES
    // - Nodemailer
    // - Resend
    // to send actual emails to the specified addresses

    return NextResponse.json(
      { 
        message: 'Family signup submitted successfully',
        recipients: ['k.adam@tulwegroup.com', 'hr@tulwegroup.com']
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing family signup:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}