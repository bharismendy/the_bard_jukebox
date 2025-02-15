import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MainTitle from "./MainTitle.vue";

describe("MainTitle", () => {
  it("renders with required title prop", () => {
    const wrapper = mount(MainTitle, {
      props: {
        title: "Test Title",
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("h1").text()).toBe("Test Title");
  });

  it("renders description when provided", () => {
    const wrapper = mount(MainTitle, {
      props: {
        title: "Test Title",
        description: "Test Description",
      },
    });

    expect(wrapper.find(".main-title__description").exists()).toBe(true);
    expect(wrapper.find(".main-title__description").text()).toBe(
      "Test Description"
    );
  });

  it("does not render description when not provided", () => {
    const wrapper = mount(MainTitle, {
      props: {
        title: "Test Title",
      },
    });

    expect(wrapper.find(".main-title__description").exists()).toBe(false);
  });

  it("has correct class structure", () => {
    const wrapper = mount(MainTitle, {
      props: {
        title: "Test Title",
      },
    });

    expect(wrapper.classes()).toContain("main-title");
    expect(wrapper.find("h1").classes()).toContain("main-title__title");
  });
});
