import { test, expect } from '@playwright/test';

test.describe('About page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('renders page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /About/i }).first()).toBeVisible();
  });

  test('renders personal story section', async ({ page }) => {
    await expect(page.getByText(/Since childhood/i)).toBeVisible();
  });

  test('renders current focus areas', async ({ page }) => {
    await expect(page.getByText('LLMs', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('AI Agents', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Voice AI', { exact: true }).first()).toBeVisible();
    await expect(page.getByText('Cybersecurity', { exact: true }).first()).toBeVisible();
  });

  test('renders fun facts', async ({ page }) => {
    await expect(page.getByText(/500\+ anime/i)).toBeVisible();
  });

  test('renders languages section', async ({ page }) => {
    await expect(page.getByText('English', { exact: true })).toBeVisible();
    await expect(page.getByText('Bangla', { exact: true }).first()).toBeVisible();
  });

  test('renders philosophy quote', async ({ page }) => {
    await expect(page.getByText(/abyss/i)).toBeVisible();
  });

  test('renders hobbies/interests section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Gaming' })).toBeVisible();
  });

  test('renders social platforms', async ({ page }) => {
    await expect(page.getByText('MyAnimeList')).toBeVisible();
  });

  test('renders profile card with name', async ({ page }) => {
    await expect(page.getByText('Mirza Mahrab Hossain').first()).toBeVisible();
  });
});
