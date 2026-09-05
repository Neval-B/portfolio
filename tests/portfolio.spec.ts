import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    if (!window.sessionStorage.getItem("e2e-motion-ready")) {
      window.localStorage.setItem("motion-preference", "off");
      window.sessionStorage.setItem("e2e-motion-ready", "true");
    }
  });

  await page.goto("/");
});

test("loads the main sections and navigates between them", async ({ page }) => {
  await expect(
    page.getByRole("heading", { name: "Hi, I'm Neval Babu" })
  ).toBeVisible();

  const navigation = page.getByRole("navigation", { name: "Main navigation" });
  const projectsLink = navigation.getByRole("link", { name: "Projects" });

  await projectsLink.click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole("heading", { name: "Projects", exact: true })).toBeInViewport();
  await expect(projectsLink).toHaveClass(/active/);

  const contactLink = navigation.getByRole("link", { name: "Contact" });

  await contactLink.click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole("heading", { name: "Let's Connect" })).toBeInViewport();
  await expect(contactLink).toHaveClass(/active/);
});

test("cycles and remembers the motion preference", async ({ page }) => {
  const motionControl = page.locator(".motion-trigger");

  await expect(motionControl).toHaveAccessibleName(
    "Motion is set to off. Change motion preference"
  );

  await motionControl.click();
  await expect(motionControl).toHaveAccessibleName(
    "Motion is set to auto. Change motion preference"
  );

  await motionControl.click();
  await expect(motionControl).toHaveAccessibleName(
    "Motion is set to on. Change motion preference"
  );

  await motionControl.click();
  await expect(motionControl).toHaveAccessibleName(
    "Motion is set to off. Change motion preference"
  );

  await page.reload();
  await expect(motionControl).toHaveAccessibleName(
    "Motion is set to off. Change motion preference"
  );
});

test("changes gallery images and supports keyboard lightbox controls", async ({ page }) => {
  const flavorQuestCard = page.locator("article").filter({
    has: page.getByRole("heading", { name: "FlavorQuest" }),
  });

  await flavorQuestCard.scrollIntoViewIfNeeded();
  await flavorQuestCard
    .getByRole("button", { name: "Show next FlavorQuest screenshot" })
    .click();

  await expect(
    flavorQuestCard.getByRole("button", {
      name: "Show FlavorQuest screenshot 2",
    })
  ).toHaveAttribute("aria-current", "true");

  await flavorQuestCard
    .getByRole("button", {
      name: "Open FlavorQuest screenshot 2 full screen",
    })
    .click();

  const lightbox = page.getByRole("dialog", {
    name: "FlavorQuest screenshot viewer",
  });

  await expect(lightbox).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(lightbox.getByText("3 / 6", { exact: true })).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(lightbox).toHaveCount(0);

  const scrabbleCard = page.locator("article").filter({
    has: page.getByRole("heading", { name: "Scrabble Game" }),
  });

  await expect(
    scrabbleCard.getByRole("link", { name: "View Live Project" })
  ).toHaveAttribute("href", "https://nb-scrabble.netlify.app/");
});

test("uses a single-column layout without horizontal overflow on mobile", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chrome", "mobile-only check");

  const projectsGrid = page.locator(".projects-grid");
  await projectsGrid.scrollIntoViewIfNeeded();

  const columnCount = await projectsGrid.evaluate((element) =>
    window
      .getComputedStyle(element)
      .gridTemplateColumns.trim()
      .split(/\s+/).length
  );
  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth
  );

  expect(columnCount).toBe(1);
  expect(hasHorizontalOverflow).toBe(false);
});
