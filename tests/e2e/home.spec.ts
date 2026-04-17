import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders hero section with name and title', async ({ page }) => {
    await expect(page.getByText('Mirza Mahrab Hossain').first()).toBeVisible();
    await expect(page.getByText('Software Engineer').first()).toBeVisible();
  });

  test('renders hero description', async ({ page }) => {
    await expect(page.getByText(/I bring innovative ideas to life/)).toBeVisible();
  });

  test('renders location and experience', async ({ page }) => {
    await expect(page.getByText('Dhaka, Bangladesh').first()).toBeVisible();
    await expect(page.getByText('1+ Years of Experience').first()).toBeVisible();
  });

  test('renders CTA buttons', async ({ page }) => {
    // Buttons use aria-label, not text name
    await expect(page.getByRole('link', { name: /Contact Mirza/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /View Resume/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /View Projects/i })).toBeVisible();
  });

  test('renders profile picture', async ({ page }) => {
    const profileImg = page.locator('img[src*="profile"]').first();
    await expect(profileImg).toBeVisible();
  });

  test('renders social links in hero', async ({ page }) => {
    const links = page.locator('a[href*="linkedin"], a[href*="github"], a[href*="facebook"]');
    await expect(links.first()).toBeVisible();
  });

  test('renders Featured Projects section', async ({ page }) => {
    await expect(page.getByText(/Featured Projects/i)).toBeVisible();
  });

  test('renders at least one featured project card', async ({ page }) => {
    await expect(page.getByText(/Hive/i).first()).toBeVisible();
  });

  test('renders Latest Blog Posts section', async ({ page }) => {
    await expect(page.getByText(/Latest Blog Posts/i)).toBeVisible();
  });

  test('renders employment status section', async ({ page }) => {
    const hasEmployed = await page.getByText(/Pipeline Inc/i).isVisible().catch(() => false);
    const hasLooking = await page.getByText(/seeking|opportunities/i).first().isVisible().catch(() => false);
    expect(hasEmployed || hasLooking).toBe(true);
  });

  test('page title is set', async ({ page }) => {
    await expect(page).toHaveTitle(/Mirza Mahrab Hossain/i);
  });
});
