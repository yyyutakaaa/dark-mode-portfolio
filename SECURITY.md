# Security Policy

We take the security of this project seriously. This document outlines our process for handling vulnerabilities and our commitment to security best practices.

## Reporting a Vulnerability

If you discover a security vulnerability, please report it to us immediately. Follow these steps:

1. **Email us:**  
   Send an email to [mehdi.ouladkhlie@icloud.com] with the following details:

   - A clear description of the vulnerability.
   - Steps to reproduce the issue.
   - Potential impact or exploit details.
   - Any suggestions for how to fix the vulnerability.

2. **Confidentiality:**  
   Please do not publicly disclose the vulnerability until we have had a chance to address it. We appreciate responsible disclosure.

3. **Response Time:**  
   We will acknowledge your report within 3 business days and work to resolve the issue as quickly as possible.

## Security Best Practices

- **Keep Dependencies Updated:**  
  Regularly update all dependencies (such as Next.js, Tailwind CSS, Framer Motion, and GSAP) to their latest secure versions.

- **Environment Variables:**  
  Use environment variables for sensitive information (e.g., API keys, database credentials). Never commit secrets to your repository.

- **Access Control:**  
  Limit access to production environments and ensure that all sensitive actions require authentication and authorization.

- **Input Validation and Sanitization:**  
  Validate and sanitize all user inputs to prevent common vulnerabilities such as SQL injection and cross-site scripting (XSS).

- **Secure Development Lifecycle:**  
  Follow secure coding guidelines and perform regular code reviews, automated testing, and security audits.

## Disclaimer

This project is provided "as is" without warranty of any kind. We encourage you to use our code in a secure manner and are not liable for any security breaches or damages resulting from its use.

For any questions regarding this security policy, please contact us at [mehdi.ouladkhlie@icloud.com].
