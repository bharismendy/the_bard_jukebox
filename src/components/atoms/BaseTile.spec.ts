import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import BaseTile from "./BaseTile.vue";
import type { ISound } from "@/interfaces/sound.interface";

// Mock Audio API
class AudioMock {
  volume: number = 0;
  currentTime: number = 0;
  loop: boolean = false;
  pause = vi.fn();
  play = vi.fn();
  addEventListener = vi.fn();
  removeEventListener = vi.fn();
}

// Mock URL
const mockURL = vi.fn();
global.URL = vi.fn(() => ({ href: "mock-sound-url" })) as any;
global.Audio = AudioMock as any;

describe("BaseTile", () => {
  let wrapper: any;
  let mockSound: ISound;

  beforeEach(() => {
    mockSound = {
      name: "Test Sound",
      soundName: "test.mp3",
      iconName: "fa-music",
      shouldRepeat: false,
      soundVolume: 0.5,
    };

    wrapper = mount(BaseTile, {
      props: {
        sound: mockSound,
      },
      global: {
        stubs: ["font-awesome-icon"],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
    vi.clearAllMocks();
  });

  it("renders properly with initial props", () => {
    expect(wrapper.find(".base-tile").exists()).toBe(true);
    expect(wrapper.find(".base-tile__text__name").text()).toBe("Test Sound");
    expect(wrapper.find(".base-tile__text__icon").classes()).toContain(
      "fa-solid"
    );
    expect(wrapper.find(".base-tile__text__icon").classes()).toContain(
      "fa-music"
    );
  });

  it("computes icon name correctly", () => {
    expect(wrapper.vm.iconName).toBe("fa-solid fa-music");
  });

  it("initializes with correct sound volume", () => {
    expect(wrapper.vm.soundVolume).toBe(0.5);
  });

  it("updates audio volume when slider value changes", async () => {
    const input = wrapper.find('input[type="range"]');
    await input.setValue(0.7);
    await wrapper.vm.handleVolumeUpdate();

    expect(wrapper.vm.audio.volume).toBe(0.7);
  });

  it("toggles audio playing state when clicked", async () => {
    await wrapper.trigger("click");
    expect(wrapper.vm.isAudioPlaying).toBe(true);
    expect(wrapper.vm.audio.play).toHaveBeenCalled();

    await wrapper.trigger("click");
    expect(wrapper.vm.isAudioPlaying).toBe(false);
    expect(wrapper.vm.audio.pause).toHaveBeenCalled();
    expect(wrapper.vm.audio.currentTime).toBe(0);
  });

  it("handles audio loop when shouldRepeat is true", async () => {
    const loopingSound = {
      ...mockSound,
      shouldRepeat: true,
    };

    const loopWrapper = mount(BaseTile, {
      props: {
        sound: loopingSound,
      },
    });

    await loopWrapper.trigger("click");
    expect(loopWrapper.vm.audio.loop).toBe(true);
  });

  it("updates isAudioPlaying when non-repeating audio ends", async () => {
    await wrapper.trigger("click");
    expect(wrapper.vm.isAudioPlaying).toBe(true);

    // Simulate audio ending
    const endedCallback = wrapper.vm.audio.addEventListener.mock.calls.find(
      (call) => call[0] === "ended"
    )[1];
    endedCallback();

    expect(wrapper.vm.isAudioPlaying).toBe(false);
  });

  it("cleans up event listeners on unmount", () => {
    wrapper.unmount();
    expect(wrapper.vm.audio.removeEventListener).toHaveBeenCalledWith(
      "ended",
      wrapper.vm.handleAudioEnded
    );
  });

  it("applies activated class when audio is playing", async () => {
    expect(wrapper.classes()).not.toContain("base-tile--activated");
    await wrapper.trigger("click");
    expect(wrapper.classes()).toContain("base-tile--activated");
  });

  it("clamps volume values between 0 and 1", async () => {
    const input = wrapper.find('input[type="range"]');

    // Test lower bound
    await input.setValue(-0.5);
    await wrapper.vm.handleVolumeUpdate();
    expect(wrapper.vm.audio.volume).toBe(0);

    // Test upper bound
    await input.setValue(1.5);
    await wrapper.vm.handleVolumeUpdate();
    expect(wrapper.vm.audio.volume).toBe(1);
  });
});
