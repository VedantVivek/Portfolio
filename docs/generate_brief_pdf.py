#!/usr/bin/env python3
"""Generate portfolio Claude redesign brief PDF."""

from pathlib import Path
from fpdf import FPDF

OUT = Path(r"c:\Users\vivekv\Desktop\vedant-portfolio\docs\Vedant-Portfolio-Claude-Redesign-Brief.pdf")
MD = Path(r"c:\Users\vivekv\Desktop\vedant-portfolio\docs\portfolio-claude-redesign-brief.md")

FONT_REG = r"C:\Windows\Fonts\arial.ttf"
FONT_BOLD = r"C:\Windows\Fonts\arialbd.ttf"
FONT_ITAL = r"C:\Windows\Fonts\ariali.ttf"


class BriefPDF(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_x(self.l_margin)
        self.set_font("Body", "I", 8)
        self.set_text_color(92, 101, 112)
        self.cell(0, 6, "Vedant Vivek Portfolio - Claude Redesign Brief", align="L")
        self.ln(10)

    def footer(self):
        self.set_y(-14)
        self.set_x(self.l_margin)
        self.set_font("Body", "I", 8)
        self.set_text_color(92, 101, 112)
        self.cell(0, 8, f"Page {self.page_no()}/{{nb}}", align="C")


def clean(text: str) -> str:
    repl = {
        "\u2014": "-",
        "\u2013": "-",
        "\u2018": "'",
        "\u2019": "'",
        "\u201c": '"',
        "\u201d": '"',
        "\u2022": "-",
        "\u2192": "->",
        "\u00a0": " ",
        "\u2026": "...",
        "**": "",
        "`": "",
        "__": "",
    }
    for a, b in repl.items():
        text = text.replace(a, b)
    return text


def write_line(pdf: BriefPDF, text: str, size=9.5, style="", color=(18, 21, 26), lh=5.2):
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Body", style, size)
    pdf.set_text_color(*color)
    pdf.multi_cell(pdf.epw, lh, text)


def main():
    lines = MD.read_text(encoding="utf-8").splitlines()

    pdf = BriefPDF(format="A4")
    pdf.alias_nb_pages()
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_font("Body", "", FONT_REG)
    pdf.add_font("Body", "B", FONT_BOLD)
    pdf.add_font("Body", "I", FONT_ITAL)
    pdf.set_margins(18, 18, 18)
    pdf.add_page()

    write_line(pdf, "Vedant Vivek Portfolio", size=18, style="B", lh=9)
    write_line(pdf, "Complete Context Brief for Claude", size=13, style="B", color=(31, 107, 74), lh=7)
    pdf.ln(2)
    write_line(
        pdf,
        "Deep section-by-section analysis: background, tone, texture, content, "
        "impression, attractiveness, strengths, weaknesses, and upgrade priorities. "
        "Paste this document into Claude as full context when asking for next-level redesigns.",
        size=10,
        color=(92, 101, 112),
        lh=5.2,
    )
    pdf.ln(3)
    y = pdf.get_y()
    pdf.set_draw_color(31, 107, 74)
    pdf.set_line_width(0.7)
    pdf.line(pdf.l_margin, y, pdf.l_margin + pdf.epw, y)
    pdf.ln(6)

    skip_first_h1 = True
    for raw in lines:
        line = clean(raw.rstrip())

        if skip_first_h1 and line.startswith("# Vedant Vivek"):
            skip_first_h1 = False
            continue

        if line.startswith("---"):
            pdf.ln(2)
            y = pdf.get_y()
            pdf.set_draw_color(213, 209, 200)
            pdf.set_line_width(0.3)
            pdf.line(pdf.l_margin, y, pdf.l_margin + pdf.epw, y)
            pdf.ln(4)
            continue

        if not line.strip():
            pdf.ln(1.8)
            continue

        if line.startswith("# "):
            pdf.ln(3)
            write_line(pdf, line[2:].strip(), size=13.5, style="B", lh=7)
            pdf.ln(1)
            continue

        if line.startswith("## "):
            pdf.ln(2.5)
            write_line(pdf, line[3:].strip(), size=11.5, style="B", color=(31, 107, 74), lh=6.2)
            pdf.ln(0.8)
            continue

        if line.startswith("### "):
            pdf.ln(2)
            write_line(pdf, line[4:].strip(), size=10.5, style="B", lh=5.8)
            pdf.ln(0.5)
            continue

        if line.startswith("|") and set(line.replace("|", "").strip()) <= set("-: "):
            continue

        if line.startswith("|"):
            cells = [c.strip() for c in line.strip("|").split("|")]
            write_line(pdf, " | ".join(cells), size=8.5, lh=4.4)
            continue

        if line.startswith("> "):
            write_line(pdf, line[2:].strip(), size=9.5, style="I", color=(92, 101, 112), lh=5)
            continue

        if line.startswith("- ") or line.startswith("* "):
            write_line(pdf, "- " + line[2:].strip(), size=9.5, lh=5)
            continue

        write_line(pdf, line, size=9.5, lh=5.1)

    pdf.output(str(OUT))
    print(f"Wrote: {OUT}")
    print(f"Size KB: {OUT.stat().st_size / 1024:.1f}")


if __name__ == "__main__":
    main()
