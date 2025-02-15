import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import SoundGrid from "./SoundGrid.vue";
import BaseTile from "@/components/atoms/BaseTile.vue";
import { listOfSound } from "@/constants/ListOfSounds";

describe("SoundGrid", () => {
  it("renders correctly", () => {
    const wrapper = mount(SoundGrid);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain("sound-grid");
  });

  it("renders correct number of BaseTile components", () => {
    const wrapper = mount(SoundGrid);
    const tiles = wrapper.findAllComponents(BaseTile);
    expect(tiles).toHaveLength(listOfSound.length);
  });

  it("passes sound prop to each BaseTile", () => {
    const wrapper = mount(SoundGrid);
    const tiles = wrapper.findAllComponents(BaseTile);

    tiles.forEach((tile, index) => {
      expect(tile.props("sound")).toEqual(listOfSound[index]);
    });
  });
});
