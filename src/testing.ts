import {voicemeeter, InterfaceType} from './index.js';


async function start() {
  try {
    const vm = new voicemeeter();
    await vm.init();
    // Login into Voicemeeter
    vm.login();

    console.debug("Before updateDeviceList");
    // Update Device List
    vm.updateDeviceList();

    console.debug("Before geteVoicemeeterInfo");
    // Get Voicemeeter Info  return { name: 'Voicemeeter Potato', index: 3, version: '3.0.0.8' }
    console.debug('Voicemeeter Info', vm.getVoicemeeterInfo());

    console.debug("before getMultiParameter");
    const test = await vm.getMultiParameter([
      {type: InterfaceType.strip, id: 0, getVals: ['device.name', 'mono', 'mute', 'solo', 'gain']},
      {type: InterfaceType.bus, id: 0, getVals: ['device.name', 'mono', 'mute', 'gain']},
    ]);
    console.log(test);

    console.log(vm.getStringParameter("Bus[0].device.name"));

    // vm.setStripParameter('B1',g 1, true);

    setInterval(() => {
      if (vm.isParametersDirty()) {
        Loop(vm);
      }
    }, 50);
  } catch (e) {
    console.log(e);
  }
}

start();

async function Loop(vm: voicemeeter) {
  console.log('MIDI', ' || ', vm.getMidi());
  console.log('Level', ' || ', vm.getLevelByID(3, 6));
  console.log('getAllParameter  || ', await (await vm.getAllParameter()).strips[2]);
}
