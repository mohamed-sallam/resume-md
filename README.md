# Markdown Resume <img src="https://simpleicons.org/icons/markdown.svg" width=20> <img src="https://simpleicons.org/icons/visualstudiocode.svg" width=20> [![License](https://img.shields.io/github/license/tengjuilin/markdown-resume)](https://opensource.org/licenses/MIT)

Markdown resume provides a simple, elegant, and fast workflow to write resumes and CVs.

- Tired of formatting resumes in word documents? Try writing resumes in Markdown, converting it to html, then print to pdf.
- Applying to many jobs, and targeted resumes are hard to version control? Try writing resumes in Markdown and version control with Git.

## Prerequisite

1. Download [VS Studio Code](https://code.visualstudio.com/)
2. Install [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) extension in VS Studio Code

## Workflow

The workflow is quite simple:

1. Have `resume.md` and `resume.css` in one directory.
2. Open `resume.md` in VS Studio Code.
3. Open Command Palette (Ctrl+Shift+P or Command+Shift+P) and search and use the command "Markdown All in One: Print current document to HTML".
   1. An html file will be generated in the directory
4. Open the html file in a browser.
5. Use the browser's print functionality to "print to pdf" (typically Ctrl+P or Command+P).
   1. The resume pdf can be saved to desired destination

Here are demos of the workflow in Windows and macOS:

![Workflow Demo in Windows](workflow-demo-win.gif)
![Workflow Demo in macOS](workflow-demo-macos.gif)

## Directory structure

- Input
  - [`resume.md`](source/resume.md) - content of resume
  - [`resume.css`](source/resume.css) - style of the printed resume
- Output
  - [`resume.html`](source/resume.html) - html file for web display or print to pdf
  - [`resume.pdf`](source/resume.pdf) - final resume pdf file

### [`resume.md`](source/resume.md)

An example can be found in [`resume.md`](source/resume.md). Below are the main guidelines:

- The file must contain link to stylesheet
  - `<link rel="stylesheet" type="text/css" href="resume.css">`
- Name should be wrapped by class `name`
  - `<span class="name">First name Last name</span>`
  - Centered, large font
- Job title should be wrapped by class `job-title`
  - `<span class="job-title">Software Engineer</span>`
  - Centered, medium font
- Contact information should be wrapped by class `info`
  - `<span class="info">Phone: 123-456-789</span>`
  - Centered
- Section heading should have second level heading
  - `## Work Experience`
  - Colored, medium font, border bottom
- Individual experience should have third level heading
  - `### Microsoft`
  - Bolded, small font
- Duration of experience should be wrapped by tag `time` and in the same line as third level heading
  - `### Microsoft <time> 2020 - 2021 </time>`
  - Right-aligned, bolded, small font
- Location of experience should be wrapped by tag `location`
  - `<location> Boston, MA </location>`
  - Italicized, small font
- Subtitle (brief description) of experience should be wrapped by tag `descr`
  - `<descr> Free and Open Source Android App to quit digital addiction </descr>`
  - Normal, small font
- Your role in experience should be wrapped by tag `role`
  - `<role> Research Developer </role>`
  - Normal, small font
- Description can be listed using Markdown style list
  - `- Designed 3 websites with cool graphics.`
- Your skills should be wrapped by tag `skills`. Separate them with commas.
  - `<skills>C++, Java, CMake, Qt, Object-Oriented Design, Design Patterns, JUnit, Gradle, QtTest, Scrum, Git/GitHub, REST APIs, Regex, Algorithms and Data Structures, Python, Doxygen, PySide2</skills>`
  - Colored curved corner rectangles for each skill
  > **Warning**
  > - You should wait until the HTML page is completely loaded on your browser.
  > - If the skills colored background doesn't appear in the preview of the print dialog, when you save the HTML to PDF, you SHOULD check "Print backgrounds" checkbox in "Options" section in Chrome print dialog (or the equivalent option in your browser).

### [`resume.css`](source/resume.css)

[`resume.css`](source/resume.css) controls resume's styling. Change it if you want to customize the template! Below are some tips:

- Colored texts are `h2` and `a` tags with color `#0D47A1`.
- To tighten the list spacing to fit content in one page, try decreasing the `li` tag's default line height of 150%.
  - Tweaking page margin in browser print option is also helpful.
