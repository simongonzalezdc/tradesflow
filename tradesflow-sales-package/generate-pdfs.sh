#!/bin/bash

# TradesFlow Sales Package - PDF Generation Script
# Requires: pandoc (brew install pandoc)
# Optional: wkhtmltopdf (brew install wkhtmltopdf) for HTML-to-PDF

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PDF_DIR="$SCRIPT_DIR/pdf"
MARKDOWN_DIR="$SCRIPT_DIR/markdown"
HTML_DIR="$SCRIPT_DIR/html"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "TradesFlow Sales Package - PDF Generator"
echo "========================================="

# Check for pandoc
if ! command -v pandoc &> /dev/null; then
    echo -e "${YELLOW}pandoc not found. Install with: brew install pandoc${NC}"
    echo ""
    echo "Alternative: Open HTML files in browser and print to PDF"
    echo "  1. Open html/[document]/index.html in Chrome/Safari"
    echo "  2. Press Cmd+P (Mac) or Ctrl+P (Windows)"
    echo "  3. Select 'Save as PDF'"
    echo ""
    exit 1
fi

# Create PDF directory if it doesn't exist
mkdir -p "$PDF_DIR"

# Generate PDFs from Markdown
generate_pdf() {
    local input="$1"
    local output="$2"
    local title="$3"

    echo -e "${YELLOW}Generating: $title${NC}"

    pandoc "$input" \
        -o "$output" \
        --pdf-engine=wkhtmltopdf \
        --metadata title="$title" \
        --css="$SCRIPT_DIR/pdf-style.css" \
        -V geometry:margin=1in \
        -V fontsize=11pt \
        --toc \
        --toc-depth=2

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Created: $output${NC}"
    else
        echo -e "${RED}✗ Failed: $output${NC}"
    fi
}

# Generate all PDFs
generate_pdf "$MARKDOWN_DIR/01-executive-brief.md" "$PDF_DIR/01-executive-brief.pdf" "TradesFlow Executive Brief"
generate_pdf "$MARKDOWN_DIR/02-product-guide.md" "$PDF_DIR/02-product-guide.pdf" "TradesFlow Product Guide"
generate_pdf "$MARKDOWN_DIR/03-business-case.md" "$PDF_DIR/03-business-case.pdf" "TradesFlow Business Case"
generate_pdf "$MARKDOWN_DIR/04-competitive-analysis.md" "$PDF_DIR/04-competitive-analysis.pdf" "TradesFlow Competitive Analysis"
generate_pdf "$MARKDOWN_DIR/05-adversarial-audit.md" "$PDF_DIR/05-adversarial-audit.pdf" "TradesFlow Adversarial Audit"
generate_pdf "$MARKDOWN_DIR/06-roadmap.md" "$PDF_DIR/06-roadmap.pdf" "TradesFlow Product Roadmap"
generate_pdf "$MARKDOWN_DIR/07-technical-specs.md" "$PDF_DIR/07-technical-specs.pdf" "TradesFlow Technical Specifications"

echo ""
echo -e "${GREEN}PDF generation complete!${NC}"
echo "PDFs saved to: $PDF_DIR"
