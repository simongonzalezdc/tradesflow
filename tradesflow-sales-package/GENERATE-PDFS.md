# PDF Generation Instructions

The HTML files in this package are styled for both screen and print. To create PDFs:

## Option 1: Browser Print-to-PDF (Recommended)

1. Open any HTML file in Chrome, Safari, or Edge
2. Press `Cmd+P` (Mac) or `Ctrl+P` (Windows)
3. Select "Save as PDF" as the destination
4. Click Save

Example:
```
open html/executive-brief/index.html
# Then Cmd+P → Save as PDF
```

## Option 2: Pandoc (Advanced)

If you have pandoc installed:

```bash
brew install pandoc wkhtmltopdf
./generate-pdfs.sh
```

## Option 3: Batch Conversion (macOS)

Using Safari's command-line print:

```bash
for dir in html/*/; do
    name=$(basename "$dir")
    /Applications/Safari.app/Contents/MacOS/Safari --print-to-pdf "pdf/$(echo $name | sed 's/-/ /g' | titlecase).pdf" "$dir/index.html"
done
```

## PDF Naming Convention

After generating, name PDFs as:
- 01-executive-brief.pdf
- 02-product-guide.pdf
- 03-business-case.pdf
- 04-competitive-analysis.pdf
- 05-adversarial-audit.pdf
- 06-roadmap.pdf
- 07-technical-specs.pdf
