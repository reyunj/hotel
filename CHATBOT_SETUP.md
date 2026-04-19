# AI Chatbot Setup Guide

This guide will help you set up the free AI chatbot for Tagboanan Beach Resort.

## 🤖 What is this chatbot?

A beautiful, floating chatbot widget that:
- Answers questions about rooms, amenities, bookings, and services
- Provides 24/7 customer support
- **No API key required** - uses rule-based responses
- Matches your resort's ocean-themed design
- Works on all pages (currently integrated into index.html)

## � File Structure

```
hotel/
├── index.html          # Homepage with integrated chatbot
├── booking.html        # Booking page
├── beachpasses.html    # Beach passes page
├── about.html          # About page
├── common.css          # Shared styles (navbar, footer)
├── common.js           # Shared HTML injection (navbar, footer)
├── chatbot.css         # Chatbot styles
├── chatbot.js          # Chatbot logic and HTML injection
└── CHATBOT_SETUP.md    # This file
```

## � Setup Instructions

### Good News: No Setup Required! 🎉

The chatbot now uses a **rule-based system** that requires **no API key** and works immediately. Just open `index.html` in your browser and the chatbot is ready to use!

### Test the Chatbot

1. Open `index.html` in your browser
2. You'll see a blue chat button in the bottom-right corner
3. Click the button to open the chat
4. Try asking questions like:
   - "What rooms do you have?"
   - "Tell me about your amenities"
   - "How do I make a booking?"
   - "What are your beach pass prices?"
   - "Where are you located?"
   - "Tell me about your coffee"

## 🎨 Features

- **Floating Widget**: Beautiful chat button with pulse animation
- **Quick Actions**: Pre-set buttons for common questions
- **Typing Indicator**: Animated dots while bot "thinks"
- **Responsive Design**: Works on mobile and desktop
- **Hotel Context**: Pre-programmed responses about Tagboanan Beach Resort
- **No API Required**: Works instantly without any setup

## 📝 Adding to Other Pages

### Easy Method (Recommended)

Just add these **3 lines** to the `<head>` of any HTML page:

```html
<link rel="stylesheet" href="common.css">
<link rel="stylesheet" href="chatbot.css">
<script src="common.js"></script>
```

And add this **1 line** before the closing `</body>` tag:

```html
<script src="chatbot.js"></script>
```

That's it! The navbar, footer, and chatbot will automatically appear on the page.

### Manual Method (If you prefer inline code)

To add the chatbot inline to other pages (booking.html, about.html, etc.):

1. Copy the CSS styles from `index.html` (lines 578-901)
2. Paste them into the `<style>` section of your target page
3. Copy the HTML widget (lines 1037-1082)
4. Paste it before the closing `</body>` tag
5. Copy the JavaScript (lines 1092-1272)
6. Paste it in the `<script>` section

## � Cost Information

- **Completely Free**: No API costs, no subscription fees
- **No Rate Limits**: Works as much as you need
- **Zero Setup**: Just copy and paste the code

## 🛠️ Customization

### Add New Responses

Edit the `RESPONSES` object in the JavaScript (lines 1093-1149) to add or modify responses:

```javascript
const RESPONSES = {
    yourCategory: [
        "Response 1",
        "Response 2",
        "Response 3"
    ]
};
```

Then add keyword matching in the `getResponse` function (lines 1210-1246):

```javascript
if (lowerMessage.includes('yourKeyword')) {
    return getRandomResponse('yourCategory');
}
```

### Change Quick Actions

Edit the quick action buttons in HTML (lines 1066-1071) to change the pre-set questions.

### Adjust Styling

All styles use CSS variables from your existing design system:
- `--primary`: Ocean blue (#0ea5e9)
- `--secondary`: Darker blue (#0284c7)
- `--accent`: Orange (#f97316)
- `--sand`: Light sand (#fef7ed)

### Modify Typing Delay

Change the delay in the `sendMessage` function (line 1271):

```javascript
}, 800 + Math.random() * 700);  // Current: 800-1500ms random delay
```

## 🐛 Troubleshooting

**Chatbot not responding?**
- Check browser console for errors (F12)
- Ensure JavaScript is enabled
- Verify the chat widget code is properly copied

**Styling issues?**
- Ensure CSS variables are defined in your page
- Check for conflicting CSS rules
- Verify the chat widget CSS is loaded

**Responses not matching?**
- Check the keyword matching in `getResponse` function
- Ensure keywords are lowercase in the matching logic
- Add more variations to the response arrays

## 🎉 Support

If you need help:
- Review browser console errors (F12)
- Check the customization guide above
- Ensure all code is properly copied to your pages

---

**Enjoy your free chatbot! 🌊**
