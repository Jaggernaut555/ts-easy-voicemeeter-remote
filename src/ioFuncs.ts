interface ioProperty {
    out: string,
    val: string,
}

const ios:Record<string, Record<string, ioProperty>> = {
  strip: {
    mono: {out: 'mono', val: 'mono'},
    mute: {out: 'mute', val: 'mute'},
    solo: {out: 'solo', val: 'solo'},
    mc: {out: 'mc', val: 'mc'},
    gain: {out: 'gain', val: 'gain'},
    pan_x: {out: 'pan_x', val: 'pan_x'},
    pan_y: {out: 'pan_y', val: 'pan_y'},
    Color_x: {out: 'Color_x', val: 'Color_x'},
    Color_y: {out: 'Color_y', val: 'Color_y'},
    fx_x: {out: 'fx_x', val: 'fx_x'},
    fx_y: {out: 'fx_y', val: 'fx_y'},
    Audibility: {out: 'Audibility', val: 'Audibility'},
    comp: {out: 'comp', val: 'comp'},
    gate: {out: 'gate', val: 'gate'},
    Karaoke: {out: 'Karaoke', val: 'Karaoke'},
    Limit: {out: 'Limit', val: 'Limit'},
    EQGain1: {out: 'EQGain1', val: 'EQGain1'},
    EQGain2: {out: 'EQGain2', val: 'EQGain2'},
    Label: {out: 'Label', val: 'Label'},
    A1: {out: 'A1', val: 'A1'},
    A2: {out: 'A2', val: 'A2'},
    A3: {out: 'A3', val: 'A3'},
    A4: {out: 'A4', val: 'A4'},
    A5: {out: 'A5', val: 'A5'},
    B1: {out: 'B1', val: 'B1'},
    B2: {out: 'B2', val: 'B2'},
    B3: {out: 'B3', val: 'B3'},
    FadeTo: {out: 'FadeTo', val: 'FadeTo'},
    FadeBy: {out: 'FadeBy', val: 'FadeBy'},
    Reverb: {out: 'Reverb', val: 'Reverb'},
    Delay: {out: 'Delay', val: 'Delay'},
    Fx1: {out: 'Fx1', val: 'Fx1'},
    Fx2: {out: 'Fx2', val: 'Fx2'},
    PostReverb: {out: 'PostReverb', val: 'PostReverb'},
    PostDelay: {out: 'PostDelay', val: 'PostDelay'},
    PostFx1: {out: 'PostFx1', val: 'PostFx1'},
    PostFx2: {out: 'PostFx2', val: 'PostFx2'},
    device: {out: 'device', val: 'device'},
  },
  bus: {
    mono: {out: 'mono', val: 'mono'},
    mute: {out: 'mute', val: 'mute'},
    EQon: {out: 'EQon', val: 'EQ.on'},
    EQAB: {out: 'EQAB', val: 'EQAB'},
    gain: {out: 'gain', val: 'gain'},
    modenormal: {out: 'modenormal', val: 'mode.normal'},
    modeAmix: {out: 'modeAmix', val: 'mode.Amix'},
    modeBmix: {out: 'modeBmix', val: 'mode.Bmix'},
    modeRepeat: {out: 'modeRepeat', val: 'mode.Repeat'},
    modeComposite: {out: 'modeComposite', val: 'mode.Composite'},
    modeTVMix: {out: 'modeTVMix', val: 'mode.TVMix'},
    modeUpMix21: {out: 'modeUpMix21', val: 'mode.UpMix21'},
    modeUpMix41: {out: 'modeUpMix41', val: 'mode.UpMix41'},
    modeUpMix61: {out: 'modeUpMix61', val: 'mode.UpMix61'},
    modeCenterOnly: {out: 'modeCenterOnly', val: 'mode.CenterOnly'},
    modeLFEOnly: {out: 'modeLFEOnly', val: 'mode.LFEOnly'},
    modeRearOnly: {out: 'modeRearOnly', val: 'mode.RearOnly'},
    device: {out: 'device', val: 'device'},
    ReverbOn: {out: 'ReverbOn', val: 'Reverb.On'},
    DelayOn: {out: 'DelayOn', val: 'Delay.On'},
  },
};
export = ios
