import { test, expect } from '@playwright/test';

test.describe('Resume page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/resume');
  });

  test('renders page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Resume/i }).first()).toBeVisible();
  });

  test('renders summary section', async ({ page }) => {
    await expect(page.getByText(/Software Engineer/i).first()).toBeVisible();
  });

  test('renders experience section with Pipeline Inc', async ({ page }) => {
    await expect(page.getByText(/Pipeline/i).first()).toBeVisible();
    await expect(page.getByText(/AI Engineer/i).first()).toBeVisible();
  });

  test('renders skills section', async ({ page }) => {
    await expect(page.getByText(/Skills/i).first()).toBeVisible();
    await expect(page.getByText('Python').first()).toBeVisible();
  });

  test('renders download resume button', async ({ page }) => {
    await expect(page.getByText(/Download Resume/i).first()).toBeVisible();
  });

  test('renders metrics', async ({ page }) => {
    await expect(page.getByText('1+').first()).toBeVisible();
  });

  test('download resume link points to PDF', async ({ page }) => {
    const link = page.locator('a[href*=".pdf"]').first();
    await expect(link).toHaveAttribute('href', /\.pdf/);
  });
});
