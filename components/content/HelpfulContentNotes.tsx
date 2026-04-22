interface HelpfulContentNotesProps {
  title: string;
  summary: string;
  slug: string;
  type: "article" | "tool";
}

function titleToTopic(title: string): string {
  return title
    .replace(/\s*[:|-].*$/, "")
    .replace(/\s*\(.*?\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getWorkflowFocus(slug: string): string {
  if (slug.includes("dpi")) {
    return "print size, source pixel dimensions, and the DPI value requested by the printer or export workflow";
  }

  if (slug.includes("ppi") || slug.includes("screen") || slug.includes("resolution")) {
    return "physical screen size, pixel resolution, and whether you are comparing CSS pixels or device pixels";
  }

  if (slug.includes("rem") || slug.includes("em") || slug.includes("vw") || slug.includes("pt") || slug.includes("css")) {
    return "the CSS reference value, the component context, and the viewport or font-size setting used by the layout";
  }

  if (slug.includes("social")) {
    return "the exact platform placement, current upload rules, safe crop area, and final preview on mobile and desktop";
  }

  if (slug.includes("passport")) {
    return "the issuing authority, official pixel range, file size, crop, background, and face-position requirements";
  }

  if (slug.includes("paper") || slug.includes("image") || slug.includes("photo")) {
    return "the target output size, image pixel dimensions, aspect ratio, compression level, and intended viewing distance";
  }

  if (slug.includes("feet") || slug.includes("inch") || slug.includes("cm") || slug.includes("mm")) {
    return "the physical measurement, the target DPI, and whether the output is for screen preview, print, signage, or layout planning";
  }

  return "the input value, the unit context, the expected output format, and the real place where the result will be used";
}

function getFormulaReminder(slug: string, topic: string): string {
  if (slug.includes("feet-to-pixels")) {
    return `${topic} uses pixels = feet x 12 x DPI, so changing 96 DPI to 300 DPI changes the result by 3.125x.`;
  }

  if (slug.includes("pixels-to-feet")) {
    return `${topic} uses feet = pixels / (DPI x 12), which is why the same artwork becomes physically smaller at higher DPI.`;
  }

  if (slug.includes("cm-to-pixels")) {
    return `${topic} uses pixels = centimeters x DPI / 2.54; the 2.54 constant is exact because one inch is exactly 2.54 cm.`;
  }

  if (slug.includes("pixels-to-cm")) {
    return `${topic} uses centimeters = pixels x 2.54 / DPI, so 300 DPI print files produce smaller physical sizes than 96 DPI screen references.`;
  }

  if (slug.includes("mm-to-pixels")) {
    return `${topic} uses pixels = millimeters x DPI / 25.4, because one inch is exactly 25.4 mm.`;
  }

  if (slug.includes("pixels-to-mm")) {
    return `${topic} uses millimeters = pixels x 25.4 / DPI, which is useful for labels, packaging, and precision print work.`;
  }

  if (slug.includes("inches-to-pixels")) {
    return `${topic} uses pixels = inches x DPI; a 10 inch width is 960 px at 96 DPI and 3000 px at 300 DPI.`;
  }

  if (slug.includes("pixels-to-inches")) {
    return `${topic} uses inches = pixels / DPI, so a 3000 px image is 31.25 inches at 96 DPI but 10 inches at 300 DPI.`;
  }

  if (slug.includes("rem")) {
    return `${topic} depends on the root font size, commonly 16px unless the site changes html font-size.`;
  }

  if (slug.includes("em")) {
    return `${topic} depends on the parent or current element font size, so nested components can compound if each layer uses em sizing.`;
  }

  if (slug.includes("vw")) {
    return `${topic} depends on viewport width: 1vw is always one percent of the current viewport width.`;
  }

  if (slug.includes("pt")) {
    return `${topic} follows the CSS print relationship where 1pt is 1/72 inch and 12pt maps to 16px at the 96px-per-inch CSS reference.`;
  }

  if (slug.includes("aspect-ratio")) {
    return `${topic} reduces width and height by their greatest common divisor, then preserves that relationship when resizing.`;
  }

  if (slug.includes("megapixel")) {
    return `${topic} starts from total pixels: one megapixel is one million pixels, then aspect ratio decides width and height.`;
  }

  return `${topic} should be checked with the formula, a realistic example, and the actual output requirement before you export or publish.`;
}

export function HelpfulContentNotes({
  title,
  summary,
  slug,
  type,
}: HelpfulContentNotesProps) {
  const topic = titleToTopic(title) || title;
  const workflowFocus = getWorkflowFocus(slug);
  const formulaReminder = getFormulaReminder(slug, topic);
  const contentType = type === "tool" ? "calculator" : "guide";

  return (
    <section id="practical-quality-notes" className="mt-10 border-t border-neutral-200 pt-8">
      <h2>Practical Quality Notes for {topic}</h2>
      <p>
        This {contentType} is most helpful when the result is tied to a real
        workflow, not treated as a loose number. For {topic}, verify {workflowFocus}.
        That context prevents the common mistake of copying a pixel value into a
        print, web, or CSS workflow where the reference size is different.
      </p>
      <p>
        {formulaReminder} If the number looks unexpectedly large or small, check the
        unit direction first, then check the DPI, base font size, viewport width, or
        physical measurement that controls the calculation.
      </p>
      <p>
        A good review pass for {topic} is simple: calculate once, compare against a
        known example, and preview the final output at the size people will actually
        see. {summary}
      </p>
      <h3>Checks Before You Use the Result</h3>
      <ul>
        <li>Confirm that {topic} is using the same input unit your source file or design brief uses.</li>
        <li>Save the DPI, viewport, or font-size setting next to the final {topic} value so another person can reproduce it.</li>
        <li>Preview the {topic} output on the target medium before sending it to print, publishing it, or adding it to CSS.</li>
        <li>Recalculate {topic} after resizing, cropping, changing aspect ratio, or changing the root font-size or viewport assumption.</li>
      </ul>
      <h3>When the Number Needs a Second Look</h3>
      <p>
        Recheck the result if the project moves from screen to print, from desktop
        to mobile, from one social platform placement to another, or from a draft
        export to a production file. Small context changes can make a correct
        {` ${topic} `}answer wrong for the final job.
      </p>
    </section>
  );
}
