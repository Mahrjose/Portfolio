import { test, expect } from '@playwright/test';

test.describe('Projects page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects');
  });

  test('renders page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  });

  test('renders project cards', async ({ page }) => {
    await expect(page.getByText('Personal Portfolio Website')).toBeVisible();
  });

  test('renders category sidebar', async ({ page }) => {
    await expect(page.getByText('CATEGORIES')).toBeVisible();
    await expect(page.getByText('Web Development').first()).toBeVisible();
  });

  test('renders search input', async ({ page }) => {
    await expect(page.getByPlaceholder(/Search/i)).toBeVisible();
  });

  test('renders sort dropdown', async ({ page }) => {
    await expect(page.getByText(/Sort/i)).toBeVisible();
  });

  test('renders status badges', async ({ page }) => {
    await expect(page.getByText(/Completed/i).first()).toBeVisible();
  });

  test('renders tech stack badges on cards', async ({ page }) => {
    await expect(page.getByText('TypeScript').first()).toBeVisible();
  });

  test('search filters projects', async ({ page }) => {
    const search = page.getByPlaceholder(/Search/i);
    await search.click();
    await search.pressSequentially('Tetrix', { delay: 50 });
    await page.waitForTimeout(500);
    await expect(page.getByText('Tetrix').first()).toBeVisible();
    await expect(page.getByText('Personal Portfolio Website')).not.toBeVisible();
  });

  test('category filter works', async ({ page }) => {
    await page.getByText('Computer Graphics').first().click();
    await page.waitForTimeout(300);
    await expect(page.getByText('Tetrix').first()).toBeVisible();
  });

  test('renders status counts', async ({ page }) => {
    await expect(page.getByText(/Completed/i).first()).toBeVisible();
  });
});
