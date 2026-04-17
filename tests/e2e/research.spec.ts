import { test, expect } from '@playwright/test';

test.describe('Research page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/research');
  });

  test('renders page heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Research/i }).first()).toBeVisible();
  });

  test('renders thesis publication', async ({ page }) => {
    await expect(page.getByText(/Self.Sovereign Identity|NID/i).first()).toBeVisible();
  });

  test('renders publication year', async ({ page }) => {
    await expect(page.getByText('2025').first()).toBeVisible();
  });

  test('renders research project', async ({ page }) => {
    await expect(page.getByText('Sentiment Analysis of Social Media Data')).toBeVisible();
  });

  test('renders supervisor info', async ({ page }) => {
    await expect(page.getByText(/Jannatun/i)).toBeVisible();
  });

  test('renders keywords/methods', async ({ page }) => {
    await expect(page.getByText(/Blockchain|NLP/i).first()).toBeVisible();
  });
});
