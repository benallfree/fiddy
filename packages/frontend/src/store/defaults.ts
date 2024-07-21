import { UserSettings } from '$store/UserModel'
import { cloneDeep, merge } from '@s-libs/micro-dash'
import type { PartialDeep } from 'type-fest'
import { HubPlayerState, HubRecordState } from './HubContext'

export const DEFAULT_USER_SETTINGS: UserSettings = {
  cornaments: {},
}

export const sanitizeUserSettings = (
  settings: PartialDeep<UserSettings>,
): UserSettings => {
  const check = UserSettings.safeParse(
    cloneDeep(merge({}, DEFAULT_USER_SETTINGS, settings)) as UserSettings,
  )
  if (!check.success) {
    throw new Error('Invalid UserSettings')
  }
  return check.data
}

export const DEFAULT_PLAYER_STATE: HubPlayerState = {
  entityStack: [],
  seeds: {},
  activeSeedSlug: '',
  activeEntityStackIdx: 0,
  activeCornamentSelections: [],
}

export const sanitizePlayerState = (
  state: PartialDeep<HubPlayerState>,
): HubPlayerState => {
  const check = HubPlayerState.safeParse(
    cloneDeep(merge({}, DEFAULT_PLAYER_STATE, state)) as HubPlayerState,
  )
  if (!check.success) {
    throw new Error('Invalid HubPlayerState')
  }
  return check.data
}

export const DEFAULT_HUB_STATE: HubRecordState = {
  grid: {
    '0x0': {},
    '0x1': {},
    '0x2': {},
    '0x3': {},
    '0x4': {},
    '0x5': {},
    '0x6': {},
    '0x7': {},
    '0x8': {},
    '0x9': {},
    '1x0': {},
    '1x1': {},
    '1x2': {},
    '1x3': {},
    '1x4': {},
    '1x5': {},
    '1x6': {},
    '1x7': {},
    '1x8': {},
    '1x9': {},
    '2x0': {},
    '2x1': {},
    '2x2': {},
    '2x3': {},
    '2x4': {},
    '2x5': {},
    '2x6': {},
    '2x7': {},
    '2x8': {},
    '2x9': {},
    '3x0': {},
    '3x1': {},
    '3x2': {},
    '3x3': {},
    '3x4': {},
    '3x5': {},
    '3x6': {},
    '3x7': {},
    '3x8': {},
    '3x9': {},
    '4x0': {},
    '4x1': {},
    '4x2': {},
    '4x3': {},
    '4x4': {},
    '4x5': {},
    '4x6': {},
    '4x7': {},
    '4x8': {},
    '4x9': {},
    '5x0': {},
    '5x1': {},
    '5x2': {},
    '5x3': {},
    '5x4': {},
    '5x5': {},
    '5x6': {},
    '5x7': {},
    '5x8': {},
    '5x9': {},
    '6x0': {},
    '6x1': {},
    '6x2': {},
    '6x3': {},
    '6x4': {},
    '6x5': {},
    '6x6': {},
    '6x7': {},
    '6x8': {},
    '6x9': {},
    '7x0': {},
    '7x1': {},
    '7x2': {},
    '7x3': {},
    '7x4': {},
    '7x5': {},
    '7x6': {},
    '7x7': {},
    '7x8': {},
    '7x9': {},
    '8x0': {},
    '8x1': {},
    '8x2': {},
    '8x3': {},
    '8x4': {},
    '8x5': {},
    '8x6': {},
    '8x7': {},
    '8x8': {},
    '8x9': {},
    '9x0': {},
    '9x1': {},
    '9x2': {},
    '9x3': {},
    '9x4': {},
    '9x5': {},
    '9x6': {},
    '9x7': {},
    '9x8': {},
    '9x9': {},
  },
}

export const sanitizeHubState = (
  state: PartialDeep<HubRecordState>,
): HubRecordState => {
  const check = HubRecordState.safeParse(
    cloneDeep(merge({}, DEFAULT_HUB_STATE, state)) as HubRecordState,
  )
  if (!check.success) {
    throw new Error('Invalid HubRecordState')
  }
  return check.data
}