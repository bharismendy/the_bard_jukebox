import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LicenceRow from "./LicenceRow.vue";
import type { ISoundLicence } from "@/interfaces/soundLicence.interface";

describe("LicenceRow", () => {
  // Mock data
  const mockLicence: ISoundLicence = {
    icon: "🎵",
    name: "Test Sound",
    author: "John Doe",
    url: "https://example.com",
    license: "MIT",
  };

  // Helper function to create wrapper
  const createWrapper = (props = { licence: mockLicence }) => {
    return mount(LicenceRow, {
      props,
    });
  };

  it("renders properly with all props", () => {
    const wrapper = createWrapper();

    // Check if all content is rendered
    expect(wrapper.text()).toContain(mockLicence.icon);
    expect(wrapper.text()).toContain(mockLicence.name);
    expect(wrapper.text()).toContain(mockLicence.author);
    expect(wrapper.text()).toContain(mockLicence.license);

    // Check if the link is rendered correctly
    const link = wrapper.find("a");
    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toBe(mockLicence.url);
    expect(link.attributes("target")).toBe("_blank");
    expect(link.text()).toBe("Link");
  });

  it("renders the name in strong tags", () => {
    const wrapper = createWrapper();
    const strongElement = wrapper.find("strong");

    expect(strongElement.exists()).toBe(true);
    expect(strongElement.text()).toBe(mockLicence.name);
  });
  it("updates when licence prop changes", async () => {
    const wrapper = createWrapper();

    const newLicence: ISoundLicence = {
      icon: "🎹",
      name: "Updated Sound",
      author: "Jane Smith",
      url: "https://example.com/updated",
      license: "Apache",
    };

    await wrapper.setProps({ licence: newLicence });

    expect(wrapper.text()).toContain(newLicence.icon);
    expect(wrapper.text()).toContain(newLicence.name);
    expect(wrapper.text()).toContain(newLicence.author);
    expect(wrapper.text()).toContain(newLicence.license);

    const link = wrapper.find("a");
    expect(link.attributes("href")).toBe(newLicence.url);
  });
});
