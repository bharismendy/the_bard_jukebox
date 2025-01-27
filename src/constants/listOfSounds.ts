import type { ISound } from '@/interfaces/sound.interface'

export const listOfSound: Array<ISound> = [
  {
    name: 'Foot step',
    iconName: 'fa-shoe-prints',
    soundName: 'footstep.wav',
    shouldRepeat: true,
  },
  {
    name: 'Wind',
    iconName: 'fa-wind',
    soundName: 'wind.wav',
    shouldRepeat: true,
  },
  {
    name: 'Drips',
    iconName: 'fa-droplet',
    soundName: 'droplet.wav',
    shouldRepeat: false,
  },
  {
    name: 'Fire',
    iconName: 'fa-fire',
    soundName: 'fire.mp3',
    shouldRepeat: false,
  },
  {
    name: 'Water',
    iconName: 'fa-water',
    soundName: '132046__kolezan__water-stream-3.wav',
    shouldRepeat: false,
  },
]
