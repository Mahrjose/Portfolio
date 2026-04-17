import { test, expect } from '@playwright/test';

// Nav items are <button> elements (not links) — they use router.push internally
const NAV_ITEMS = ['Home', 'About', 'Blog', 'Projects', 'Resume', 'Education', 'Research', 'Contact'];

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders site name', async ({ page }) => {
    await expect(page.getByText('Mirza Mahrab Hossain').first()).toBeVisible();
  });

  test('renders all nav items', async ({ page }) => {
    for (const name of NAV_ITEMS) {
      // Nav items are buttons in desktop view
      await expect(page.getByRole('button', { name, exact: true }).first()).toBeVisible();
    }
  });

  test('navigates to About page', async ({ page }) => {
    await page.getByRole('button', { name: 'About', exact: true }).first().click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('navigates to Projects page', async ({ page }) => {
    await page.getByRole('button', { name: 'Projects', exact: true }).first().click();
    await expect(page).toHaveURL(/\/projects/);
  });

  test('navigates to Resume page', async ({ page }) => {
    await page.getByRole('button', { name: 'Resume', exact: true }).first().click();
    await expect(page).toHaveURL(/\/resume/);
  });

  test('navigates to Contact page', async ({ page }) => {
    await page.getByRole('button', { name: 'Contact', exact: true }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });
});
