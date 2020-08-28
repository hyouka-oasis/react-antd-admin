import { EffectsCommandMap } from 'dva';
import { AnyAction } from 'redux';

export type Effect = (
    action: AnyAction,
    effects: EffectsCommandMap
) => void

export type Dispatch = <T = any, Call = (payload: T) => void>(
    action: {
        type: string;
        payload?: T;
        callback?: Call;
        [key: string]: any
    }
) => any
