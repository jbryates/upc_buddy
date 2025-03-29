# About UPC Buddy
**UPC Buddy** is a simple Chrome extension that helps you easily extract and copy the UPC (Universal Product Code) from product pages on websites like Walmart.com. With just a click, you can find the UPC of a product and copy it to your clipboard. This is great tool for resellers sourcing through online arbitrage to quickly and easily find a product's UPC code and search for it on another marketplace.

## Features
- **Extract UPC**: Automatically locates and displays the UPC from a product page's source code.
- **Copy to Clipboard**: Allows you to copy the UPC code with a single click, making it easy to use elsewhere.

## How to Use
1. **Install the Extension**:
   - Download the extension files or clone the repository to your local machine.
   - Go to `chrome://extensions/` in your Chrome browser.
   - Enable **Developer mode** (toggle switch in the top right).
   - Click **Load unpacked**, and select the folder containing the extension files.

2. **Extract the UPC**:
   - Visit a product page on a website like **Walmart.com** (other websites may also work depending on the meta tags used).
   - Click on the **UPC Buddy** icon in your Chrome toolbar.

3. **Copy the UPC**:
   - The UPC code will be displayed in the popup window.
   - Click the **Copy UPC** button to copy the code to your clipboard.
   - You can then paste the UPC wherever you need it!

## Supported Websites
- **Walmart.com**: The extension currently supports Walmart's product pages, extracting the UPC from the meta tag `itemprop="gtin13"`.
- Other websites may work as well if they use similar meta tags for UPC or GTIN codes.

## How It Works
- **Content Script**: The extension scans the product page and looks for meta tags that contain the UPC (such as `itemprop="gtin13"`).
- **Popup Interface**: Displays the UPC and provides a button to copy it to the clipboard.
- **Chrome API**: The extension uses Chrome's `navigator.clipboard.writeText()` API to copy the UPC to the clipboard when the button is clicked.

## Icon Credit
Icon is from Google Fonts [https://fonts.google.com/icons].

---

Enjoy using UPC Buddy and happy shopping!
