import { test, expect } from '@playwright/test';

test.describe('Contact page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('renders page heading', async ({ page }) => {
    // Contact page heading is "Get In Touch"
    await expect(page.getByRole('heading', { name: /Get In Touch/i }).first()).toBeVisible();
  });

  test('renders contact form', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible();
  });

  test('form has name and message fields', async ({ page }) => {
    // First name field
    await expect(page.locator('input[id="firstName"]')).toBeVisible();
    await expect(page.locator('textarea')).toBeVisible();
  });

  test('renders location info', async ({ page }) => {
    await expect(page.getByText('Dhaka, Bangladesh').first()).toBeVisible();
  });

  test('renders social links section', async ({ page }) => {
    const linkedin = page.locator('a[href*="linkedin"]').first();
    await expect(linkedin).toBeVisible();
  });

  test('renders availability message', async ({ page }) => {
    await expect(page.getByText(/available|opportunities/i).first()).toBeVisible();
  });
});
