import { test, expect } from '@playwright/test';

test.describe('Education page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/education');
  });

  test('renders page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Education/i }).first()).toBeVisible();
  });

  test('renders BRAC University', async ({ page }) => {
    await expect(page.getByText(/BRAC University/i)).toBeVisible();
  });

  test('renders degree name', async ({ page }) => {
    await expect(page.getByText(/Bachelor of Science in Computer Science/i)).toBeVisible();
  });

  test('renders GPA', async ({ page }) => {
    await expect(page.getByText(/3\.7/).first()).toBeVisible();
  });

  test('renders thesis title', async ({ page }) => {
    await expect(page.getByText(/Self.Sovereign Identity/i).first()).toBeVisible();
  });

  test('renders online courses section', async ({ page }) => {
    await expect(page.getByText(/Online|Courses/i).first()).toBeVisible();
  });
});
