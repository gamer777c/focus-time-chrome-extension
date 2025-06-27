// Enhanced Background Script for Productivity Tracker (Manifest V3)

let currentTab = null;
let startTime = Date.now();

// Handle tab activation
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (!tab.url || !tab.url.startsWith("http")) return;

  const domain = new URL(tab.url).hostname;

  if (currentTab) {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    chrome.storage.local.get("visitLog", (data) => {
      const log = data.visitLog || {};
      log[currentTab] = (log[currentTab] || 0) + timeSpent;
      chrome.storage.local.set({ visitLog: log });
    });
  }

  currentTab = domain;
  startTime = Date.now();
});

// Reset tracking on browser startup
chrome.runtime.onStartup.addListener(() => {
  currentTab = null;
  startTime = Date.now();
});
