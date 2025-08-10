import {page} from "../support/hooks"
import { Locator } from '@playwright/test';
export const dashboardPage = {
libraries: () : Locator => page.getByRole('link', { name: 'Libraries' }),
fusionDashboard: (): Locator =>page.getByRole('link', { name: 'Dashboard' }),
dashboardMenu:'//a[@class="dashboard" and contains(text(),"Dashboard")]',
logOut:'//a[contains(@href, "/logout") and (contains(@class, "logout") or contains(@class, "help"))]', 
}