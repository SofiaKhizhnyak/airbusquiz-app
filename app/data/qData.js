//AIRCONDITIONING – PRESSURIZATION – VENTILATION part 1 (1-30)//
///******CHECKED*/
export const qData2 = [
  {
    id: 1,
    question: "Conditioned air is distributed to:",
    options: [
      "Cockpit, cargo bays and cabin",
      "Cockpit, fwd and aft cabins",
      "Cockpit, avionics bay and cabin",
      "Cockpit, cabin and holds 1 and 2 only",
    ],
    answer: 1,
  },
  {
    id: 2,
    question: "Hot air fault light illuminates on the air conditioning panel,",
    options: [
      "The hot air press. reg. valve opens and the trim air valves close.",
      "The hot air press. reg. valve closes and the trim air valves open.",
      "The hot air press. reg. valve closes and the trim air valves close.",
      "The hot air press. reg. valve opens and the trim air valves open.",
    ],
    answer: 2,
  },
  {
    id: 3,
    question:
      "Does the trim air provide the warm air or the cold air to the air conditioning system?",
    options: ["Cold air", "Warm air"],
    answer: 1,
  },
  {
    id: 4,
    question:
      "In case of zone controller primary and secondary channel failure, what temperatures are maintained by pack one and pack two?",
    options: [
      "15 deg C both",
      "25 deg C both",
      "20 deg C for pack one and 10 deg C for pack two",
      "24 deg C for pack one and 15 deg C for pack two",
    ],
    answer: 2,
  },
  {
    id: 5,
    question:
      "In normal flight in closed circuit configuration, the avionics ventilation system controls the temperature of the cooling air by:",
    options: [
      "Adding airconditioned air to the flow",
      "Extracting air overboard",
      "Adding avionics bay air",
      "Passing air through a skin heat exchanger",
    ],
    answer: 3,
  },
  {
    id: 6,
    question:
      "To enable Ram air to the mixture unit, The Ram air switch should be used:",
    options: [
      "At any time",
      "Only when differential pressure is less than 1 psi.",
      "When pressure is greater than 1 psi diff.",
      "Only after outflow valve is fully opened",
    ],
    answer: 1,
  },
  {
    id: 7,
    question: "Pack controller, primary channel failure.",
    options: [
      "The secondary computer operates as a backup mode and regulation is not optimized",
      "The secondary computer takes over (all functions as normal)",
      "Pack is lost",
      "Pack outlet temperature is controlled at 15 deg C",
    ],
    answer: 0,
  },
  {
    id: 8,
    question: "Pack controller, secondary channel failure",
    options: [
      "No effect on pack regulation backup mode is lost",
      "Pack is lost",
      "No effect (all modes still available)",
      "Pack outlet temperature is controlled at 15 deg C",
    ],
    answer: 0,
  },
  {
    id: 9,
    question: "Pack controller, primary and secondary channel failure",
    options: [
      "Pack outlet temperature is controlled to between 5 and 30 deg C by the anti-ice valve",
      "The pack is closed",
      "The packs deliver a fixed temperature of 20 deg C",
    ],
    answer: 0,
  },
  {
    id: 10,
    question: "Hot air pressure reg. valve failed open:",
    options: [
      "Optimized regulation is lost",
      "The temperature stays at the value selected",
      "No effect",
      "Cabin temperature will be controlled at the upper limit 30 deg C",
    ],
    answer: 2,
  },
  {
    id: 11,
    question:
      "Bleed air supplied from the APU (APU bleed valve open), the pack flow is automatically selected:",
    options: ["High", "Normal", "Low", "Econ. Flow"],
    answer: 0,
  },
  {
    id: 12,
    question: "Trim air valve, each one optimizes the temperature by:",
    options: [
      "Adding hot air",
      "Adding fresh air",
      "Modulating of pack flow",
      "Adding re-circulated air",
    ],
    answer: 0,
  },
  {
    id: 13,
    question: "Hot air pressure regulating valve:",
    options: [
      "Regulates the pressure of hot air tapped upstream of the packs",
      "Is spring loaded open in the absence of air",
      "Opens automatically in case of duct overheat",
      "Opens automatically if the cabin trim air valve fails",
    ],
    answer: 0,
  },
  {
    id: 14,
    question: "Pack flow control valve:",
    options: [
      "Is pneumatically operated and electrically controlled",
      "Electrically operated and pneumatically controlled",
      "Opens automatically during engine starting",
      "Is spring loaded to open.",
    ],
    answer: 1,
  },
  {
    id: 15,
    question:
      "Engine flow demand, when the heating or cooling demand in one zone cannot be satisfied:",
    options: [
      "The minimum idle must be increased manually",
      "The minimum idle is increased automatically",
      "In any case, flight idle is sufficient",
      "The APU must be used to supply additional air.",
    ],
    answer: 1,
  },
  {
    id: 16,
    question: "What is the normal maximum cabin altitude?",
    options: ["8,000 ft", "9,550 ft +/- 350 ft", "14,000 ft", "800 ft"],
    answer: 0,
  },
  {
    id: 17,
    question: "What is the Max. negative Diff. pressure for the cabin?",
    options: ["0 psi.", "1 psi.", "2 psi.", "8.6 psi."],
    answer: 1,
  },
  {
    id: 18,
    question:
      "It is permissible to use simultaneously packs and LP ground unit during long stops in a hot airfield:",
    options: [
      "Yes",
      "No",
      "Yes, if external temperature is greater than 50 deg C",
      "Yes, provided the airflow supplied by the ground cart is less than 1.2 kg/s",
    ],
    answer: 1,
  },
  {
    id: 19,
    question:
      "What are the different sources of air for air conditioning and pressurization?",
    options: [
      "Engine bleed air and recirculated air (only on ground)",
      "Engine bleed air and recirculated air.",
      "Engine bleed air and recirculated air, or if selected, APU bleed air and recirculated air.",
      "Engine bleed air only.",
    ],
    answer: 2,
  },
  {
    id: 20,
    question:
      "During the exterior preflight on a warm day, in what position would you expect to find the avionics ventilation system INLET and EXTRACT valves to be in?",
    options: [
      "Closed.",
      "Open.",
      "Closed or open regarding of the APU bleed valve.",
      "Closed or open",
    ],
    answer: 1,
  },
  {
    id: 21,
    question:
      "What happens to the pack flow control valves during engine start?",
    options: [
      "They must be selected off.",
      "They must be selected off on cold days only.",
      "They must be selected off on hot days only.",
      "They automatically close.",
    ],
    answer: 3,
  },
  {
    id: 22,
    question: "The temperature of each aircraft zone is optimized by means of:",
    options: [
      "A HOT AIR valve.",
      "A ZONE control valve.",
      "A PACK FLOW VALVE.",
      "A TRIM AIR valve.",
    ],
    answer: 3,
  },
  {
    id: 23,
    question: "When does normal pressurization occur?",
    options: [
      "After second engine start.",
      "Pressurization occurs during taxi",
      "Pressurization occurs during the takeoff roll.",
      "After rotation.",
    ],
    answer: 3,
  },
  {
    id: 24,
    question: "When does normal depressurization occur?",
    options: [
      "100 feet AGL above touchdown.",
      "It is complete 1 minute after touchdown.",
      "After flap retraction.",
      "On landing touchdown",
    ],
    answer: 1,
  },
  {
    id: 25,
    question:
      "Under what conditions should the pack flow controller be set to LO?",
    options: [
      "With a low passenger load to reduce bleed air demand and improve fuel efficiency.",
      "With a low passenger load to increase cabin temperature",
      "With a high passenger load to reduce cabin temperature",
      "In cold conditions to achieve a higher cabin temperature range.",
    ],
    answer: 0,
  },
  {
    id: 26,
    question:
      "Which statement is correct regarding illumination of the amber AFT ISOL VALVE fault light?",
    options: [
      "Automatically closes the aft cargo compartment isolation valves.",
      "Means that either the inlet or outlet isolation valve(s) disagrees with the switch position.",
      "Indicates that the extract fan has stopped.",
      "All of the above.",
    ],
    answer: 1,
  },
  {
    id: 27,
    question: "Pressurization controllers receive inputs from:",
    options: [
      "LGCIU, ADIRU, FMGS, and EIU.",
      "LGCIU’s and the MCDU.",
      "LGCIU’s and pitot static sources.",
      "MCDU and LGCIU’s.",
    ],
    answer: 0,
  },
  {
    id: 28,
    question: "What computers control the cabin and cockpit conditioned air?",
    options: [
      "Two zone controllers that pass information and requests to two pack controllers.",
      "Two pack controllers that pass information and requests to three zone controllers.",
      "Three zone controllers that pass information and instructions to two pack controllers for three zones.",
      "One zone controller that passes information and instructions to two pack controllers for three zones.",
    ],
    answer: 3,
  },
  {
    id: 29,
    question: "When would you select RAM AIR ON?",
    options: [
      "If additional cooling is required on the ground.",
      "Dual pack failure or smoke removal.",
      "When pack temperatures are too high.",
      "When there is smoke in the cabin.",
    ],
    answer: 1,
  },
  {
    id: 30,
    question:
      "What happens when a temperature selector rotary knob is adjusted?",
    options: [
      "A signal is sent to the zone controller requesting a different temperature.",
      "Nothing as there is no relationship between a temperature selector knob and the trim air valve.",
      "The associated trim air valve immediately moves to a different position.",
    ],
    answer: 0,
  },
];
//AIRCONDITIONING – PRESSURIZATION – VENTILATION part 2 (31-61)///
///******CHECKED*/
export const qData3 = [
  {
    id: 31,
    question:
      "With APU BLEED ON and engine BLEED switches ON with engines running, what is the position of the engine bleed valves?",
    options: ["Closed", "Open", "Depends on the cross-bleed selector"],
    answer: 0,
  },
  {
    id: 32,
    question:
      "Pressurization is normally automatic. Can you interfere with it?",
    options: [
      "Yes, CABIN PRESS MODE SEL to OVERRIDE and MAN V/S CTL toggle switch.",
      "Yes, manually set landing elevation using the LND ELEV AUTO selector.",
      "Both are correct.",
    ],
    answer: 0,
  },
  {
    id: 33,
    question:
      "Under what conditions should the pack flow controller be set to HI?",
    options: [
      "In cold conditions to achieve a higher cabin temperature range.",
      "With a low passenger load to increase cabin air flow.",
      "With a high passenger load in hot conditions in order to help reduce the cabin temperature.",
    ],
    answer: 2,
  },
  {
    id: 34,
    question: "What is the function of the ram air valve?",
    options: [
      "Ventilation while on the ground.",
      "Emergency smoke removal and ventilation in the event of dual pack failure.",
      "Avionics cooling.",
      "Cargo ventilation & avionics cooling.",
    ],
    answer: 1,
  },
  {
    id: 35,
    question: "The Ram Air valve:",
    options: [
      "Should be opened for increased ventilation while on the ground.",
      "Will open automatically after engine start.",
      "Should be opened for increased ventilation while in flight.",
      "Must be manually activated.",
    ],
    answer: 3,
  },
  {
    id: 36,
    question:
      "Both pressurization auto controllers are set by the active flight plan loaded in the MCDU. The QNH entry on the MCDU Approach Performance page refines the depressurization schedule for the landing.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 37,
    question:
      "During flight below _____, Ram Air Valve can provide an emergency source of conditioned air during non-pressurized flight.",
    options: ["5,000 feet", "8,000 feet", "10,000 feet", "12,500 feet"],
    answer: 2,
  },
  {
    id: 38,
    question: "What limitation is associated with the ram air valve?",
    options: [
      "Do not open if cabin pressure is greater than 1 psi.",
      "Only open while on the ground.",
      "Will not open if the DITCHING switch is off.",
      "Operation is automatic.",
    ],
    answer: 0,
  },
  {
    id: 39,
    question:
      "With the pressurization system in the automatic mode, which valves are closed when the ditching push button is selected on?",
    options: [
      "All valves below the water line.",
      "APU inlet.",
      "The engine bleed valves.",
      "Only the avionics cooling valves.",
    ],
    answer: 0,
  },
  {
    id: 40,
    question:
      "What is the maximum negative differential pressure for the cabin?",
    options: ["0 psi.", "1 psi.", "2 psi.", "3 psi."],
    answer: 1,
  },
  {
    id: 41,
    question: "The HOT AIR valve push button controls:",
    options: [
      "The trim air valve.",
      "The hot air manifold.",
      "The engine bleed valves.",
      "The pack flow control valves.",
    ],
    answer: 1,
  },
  {
    id: 42,
    question: "Aft cargo indications may be found on which ECAM page(s)?",
    options: [
      "Only the CRUISE page.",
      "Only the BLEED page.",
      "Only the CAB PRESS page.",
      "The CRUISE page and the COND page.",
    ],
    answer: 3,
  },
  {
    id: 43,
    question:
      "Avionics ventilation system indications may be found on which ECAM page(s)?",
    options: [
      "Only the BLEED page.",
      "Only the CAB PRESS page.",
      "The in-flight ECAM cruise page.",
      "The in-flight ECAM cruise page and the CAB PRESS pages.",
    ],
    answer: 1,
  },
  {
    id: 44,
    question:
      "When APU is supplying the packs, the pack controller sends a demand signal to increase airflow when a zone temperature cannot be satisfied. This signal is sent to the:",
    options: [
      "Pack Ram Air Inlet Flap.",
      "APU ECB.",
      "Pack Outflow Control Valve.",
      "Engine interface units EIU’s",
    ],
    answer: 1,
  },
  {
    id: 45,
    question:
      "In case of zone controller primary and secondary channel failure, what temperatures are maintained by Packs 1 and 2?",
    options: [
      "15 deg C for both.",
      "25 deg C both.",
      "20 deg C for Pack one and 10 deg C for Pack two",
      "24 deg C for Pack one and 15 deg C for Pack two.",
    ],
    answer: 2,
  },
  {
    id: 46,
    question:
      "The PACK FLOW controller is set to NORM and yet the ECAM display shows PACK FLOW to be high. How is this possible?",
    options: [
      "As the engines are not running the PACK FLOW indicators are at the position they were selected to at the last shut down.",
      "As no bleed air is flowing the PACK FLOW valves are spring loaded to the fully open position.",
      "HI flow is automatically selected regardless of PACK FLOW selector position because air is only being supplied by the APU.",
      "With cold outside air conditions the PACK FLOW is automatically increased to help increase the cabin temperature.",
    ],
    answer: 2,
  },
  {
    id: 47,
    question: "When would you select PACK FLOW to HI?",
    options: [
      "Smoke removal or hot/humid conditions.",
      "When passengers are complaining it is too cold.",
      "Above FL 350.",
      "Above FL 250.",
    ],
    answer: 0,
  },
  {
    id: 48,
    question:
      "Which of the following statements is correct concerning conditioned air?",
    options: [
      "Conditioned air and trim air are mixed then distributed to each zone.",
      "Recirculated air, conditioned air and hot trim air are mixed then distributed to each zone.",
      "Hot trim air is added to the mixing unit before distribution to each zone.",
      "Recirculating fans draw cabin air to a mixing unit where conditioned air is added.",
    ],
    answer: 3,
  },
  {
    id: 49,
    question:
      "How many temperature selectors are there on the A320? How many temperature zones are there?",
    options: [
      "Three rotary temperature selectors and one zone.",
      "Three rotary temperature selectors, one each for the cockpit zone, the forward cabin zone, and the aft cabin zone.",
      "Two rotary temperature selectors, one for the cockpit and first class zone and one for the aft cabin zone.",
      "Four rotary temperature selectors and four zones.",
    ],
    answer: 1,
  },
  {
    id: 50,
    question: "The temperature selectors are located in:",
    options: ["The cockpit", "The cabin", "Both", "Only on the CIDS panel"],
    answer: 0,
  },
  {
    id: 51,
    question:
      "During normal flight, the avionics ventilation system controls the temperature of the cooling air by:",
    options: [
      "Adding air-conditioned air to the flow.",
      "Extracting air overboard.",
      "Adding an avionics bay air.",
      "Passing air through a skin heat exchanger.",
    ],
    answer: 3,
  },
  {
    id: 52,
    question:
      "Placing the avionics ventilation system in the smoke configuration:",
    options: [
      "Opens the #1 GLC.",
      "Opens the cargo under-floor valve.",
      "Opens the #2 GLC.",
      "De-energizes the blower fan, extract fan runs, and opens the air conditioning extract valves.",
    ],
    answer: 3,
  },
  {
    id: 53,
    question: "How can you change controllers during flight?",
    options: [
      "Cycle the LDG ELEV AUTO knob out of the AUTO position then back to AUTO.",
      "Cycle the CABIN PRESS MODE SEL pushbutton to the MAN position then back to AUTO.",
      "Cycle the cabin pressurization MAN V/S CTL switch.",
    ],
    answer: 1,
  },
  {
    id: 54,
    question:
      "Hot air “FAULT” light illuminates on the air conditioning panel.",
    options: [
      "The hot air press reg. valve opens and the trim air valves close.",
      "The hot air press reg. valve closes and the trim air valves open.",
      "The hot air press reg. valve closes and the trim air valves close.",
    ],
    answer: 2,
  },
  {
    id: 55,
    question: "How many trim air valves are there?",
    options: [
      "One trim air valve.",
      "Three: one each for the cockpit zone, the forward cabin zone, and the aft cabin zone.",
      "Two: one for the cockpit and first-class zone, and one for the cabin zone.",
      "Four: one each for the cockpit zone, the first-class zone, and two for the aft zone.",
    ],
    answer: 1,
  },
  {
    id: 56,
    question:
      "What position do the pack valves go to in the event of a loss of the bleed system pressure?",
    options: [
      "They remain in their last position.",
      "Full open.",
      "Mid position.",
      "Closed.",
    ],
    answer: 3,
  },
  {
    id: 57,
    question: "The RAM AIR switch should be used:",
    options: [
      "At any time.",
      "Only when differential pressure is less than 1 psi.",
      "When differential pressure is more than 1 psi.",
      "Only after outflow valve is fully opened.",
    ],
    answer: 1,
  },
  {
    id: 58,
    question: "What is the function of the Pack Flow selector?",
    options: [
      "Allows the pilot to increase pack flow but will not allow a manual decrease in flow if needed by the aircraft demands.",
      "Always allows high flow regardless of switch position when the APU is used for air conditioning.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 59,
    question:
      "Which configuration is the avionics ventilation system in while airborne with no abnormals present?",
    options: ["Open.", "Smoke.", "Fire.", "Closed."],
    answer: 3,
  },
  {
    id: 60,
    question:
      "What is the maximum altitude associated with the pressurization system?",
    options: ["39,100 feet", "39,500 feet", "41,000 feet", "41,100 feet"],
    answer: 0,
  },
  {
    id: 61,
    question: "Trim air valves are controlled by:",
    options: [
      "The zone controller.",
      "Anti-ice valve.",
      "Hot air pressure regulating valve.",
      "The pack controller.",
    ],
    answer: 0,
  },
];
//AIRCONDITIONING – PRESSURIZATION – VENTILATION part 3 (62-93)///
///******CHECKED*/
export const qData4 = [
  {
    id: 62,
    question:
      "Which statement is TRUE concerning the cargo compartment ventilation?",
    options: [
      "Both cargo compartments are pressurized and heated using both cabin air and hot trim air.",
      "Recirculated air, conditioned air, and hot trim air are mixed then distributed to each cargo compartment.",
      "Only the aft cargo compartment is heated and ventilated. Cabin ambient air is mixed with hot trim air and drawn through isolation valves by extraction fans.",
    ],
    answer: 2,
  },
  {
    id: 63,
    question:
      "The APU BLEED FAULT indicates that the main APU controller is in fault.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 64,
    question: "Aft cargo ventilation is controlled by:",
    options: [
      "The aft cargo rotary selector knob.",
      "The cargo ventilation controller.",
      "The zone controller and the SDCU.",
      "The cargo ventilation controller and the aft cargo rotary selector knob.",
    ],
    answer: 1,
  },
  {
    id: 65,
    question:
      "The vent fan runs any time there is a normal ship's power and the isolation valves are open.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 66,
    question:
      "The cabin zone temperature sensors are ventilated by the air extracted by the lavatory and galley fans.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 67,
    question: "Pressurization indications are found on which ECAM page(s)?",
    options: [
      "BLEED page.",
      "Only on the CAB PRESS page.",
      "The in-flight ECAM cruise page and the CAB PRESS page.",
      "On the CAB PRESS & BLEED pages.",
    ],
    answer: 2,
  },
  {
    id: 68,
    question: "How many outflow valves are there?",
    options: [
      "One valve with one door.",
      "One valve with two doors.",
      "Two valves with only one door visible.",
      "Two valves (one main + one back-up) with only two doors visible.",
    ],
    answer: 1,
  },
  {
    id: 69,
    question: "At what cabin altitude do you get an ECAM warning?",
    options: ["8,800 feet.", "9,000 feet.", "9,550 feet.", "14,000 feet."],
    answer: 2,
  },
  {
    id: 70,
    question:
      "When the pack flow control knob is positioned to HI, air flow is:",
    options: [
      "80% of normal rate.",
      "100% of normal rate.",
      "120% of normal rate.",
      "150% of normal rate.",
    ],
    answer: 2,
  },
  {
    id: 71,
    question:
      "If you select a position other than the AUTO detent on the LDG ELEV AUTO selector, how can you see the actual landing elevation value?",
    options: [
      "On the ECAM CRUISE.",
      "On the PRESS page.",
      "On the ECAM CRUISE or the PRESS page.",
    ],
    answer: 2,
  },
  {
    id: 72,
    question: "What will cause the ENG BLEED fault light to come on?",
    options: [
      "Overpressure (downstream of bleed valve)",
      "Bleed overheat",
      "Wing or engine leak on associated side.",
      "All of the above",
    ],
    answer: 3,
  },
  {
    id: 73,
    question: "What does the CARGO HEAT HOT AIR FAULT light indicate?",
    options: [
      "A duct overheat is detected.",
      "The Aft Cargo Pressure Regulating valve closes.",
      "The system will reset if the ISOL VALVE switch is ON.",
      "All of above.",
    ],
    answer: 3,
  },
  {
    id: 74,
    question: "During Ground function operation, the outflow valve is:",
    options: [
      "Fully open.",
      "Fully closed.",
      "Positioned according to FMGS demands.",
    ],
    answer: 0,
  },
  {
    id: 75,
    question: "The outflow valve is powered by:",
    options: [
      "One of two electric motors.",
      "One of three electric motors.",
      "Three mechanically linked electric motors.",
    ],
    answer: 1,
  },
  {
    id: 76,
    question: "The purpose of the safety valve is to avoid:",
    options: [
      "Excessive positive pressure differential.",
      "Excessive negative differential.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 77,
    question:
      "When landing elevation is set to AUTO, the landing elevation is sent to the controller from:",
    options: ["FMGS.", "FCU.", "ADIRS.", "Captain baro ref."],
    answer: 0,
  },
  {
    id: 78,
    question: "The mixing unit is connected to:",
    options: [
      "Packs, cabin air, emergency ram air inlet and LP ground connector.",
      "Packs, emergency ram air inlet and LP ground connector.",
      "Packs and cabin air.",
      "Pack 1 and pack 2 only.",
    ],
    answer: 0,
  },
  {
    id: 79,
    question: "Once set to “ON” the air conditioning packs operate:",
    options: [
      "Automatically and independently of each other.",
      "Normally, but the output of one affects the other.",
      "Automatically, pack one as a master, pack two as a slave.",
      "Automatically, pack two as a master, pack one as a slave.",
    ],
    answer: 0,
  },
  {
    id: 80,
    question:
      "Emergency ram air inlet. When set to “ON” the ram air valve will open and supply airflow:",
    options: [
      "In any case.",
      "Diff. press < 1 psi, and ditching not selected.",
      "Provided ditching is not selected.",
      "Provided ditching is selected.",
    ],
    answer: 1,
  },
  {
    id: 81,
    question: "Cond. Zone regulator fault (primary channel failed):",
    options: [
      "Cabin zone is at fixed temperature.",
      "Packs are at fixed temperature.",
      "Secondary channel operates as back up and operation is as normal.",
      "The packs deliver a fixed temperature. 20 deg C for pack one and 10 deg C for pack two.",
    ],
    answer: 0,
  },
  {
    id: 82,
    question: "Temperature control is automatic and is regulated by:",
    options: [
      "Zone controllers.",
      "Pack 1 and 2 controllers.",
      "Zone controllers, pack 1 and 2 controllers.",
      "The pack flow control valves only.",
    ],
    answer: 2,
  },
  {
    id: 83,
    question:
      "If a pack controller fails (primary and secondary channel failure), the pack outlet air temperature is controlled by:",
    options: [
      "Ram Air Valve.",
      "Hot air pressure regulating valve.",
      "Anti-ice valve.",
      "Trim air valve.",
    ],
    answer: 2,
  },
  {
    id: 84,
    question: "The zone controller optimizes temperature by action on:",
    options: [
      "Pack anti-ice valve.",
      "Trim air valve.",
      "Pack flow control valve.",
      "Hot air pressure regulating valve.",
    ],
    answer: 1,
  },
  {
    id: 85,
    question:
      "When using APU bleed to supply the packs, with the pack flow selector at LO, the pack airflow is:",
    options: [
      "80% of normal.",
      "Normal.",
      "120% of normal.",
      "110% of normal.",
    ],
    answer: 2,
  },
  {
    id: 86,
    question:
      "In case of trim air system fault (zone controller primary channel failure), the secondary channel of the zone controller regulated the zone temperature at:",
    options: ["14 deg.C", "24 deg C", "15 deg.C", "10 deg.C"],
    answer: 1,
  },
  {
    id: 87,
    question: "In case of total zone controller failure:",
    options: [
      "Hot air and trim air valves open and packs deliver air at a fixed temperature (15 deg.C pack 1 and 10 deg.pack2).",
      "Hot air and trim air valves close and packs deliver air at a fixed temperature (15 deg.C pack 1 and 10 deg.pack2).",
      "Hot air and trim air valves close and packs deliver air at a fixed temperature (20 deg.C pack 1 and 10 deg.pack2).",
      "Hot air and trim air valves open and packs deliver air at a fixed temperature (20 deg.C pack 1 and 10 deg.pack2).",
    ],
    answer: 2,
  },
  {
    id: 88,
    question:
      "During landing run, Ram Air Inlet flaps open when speed is less than:",
    options: [
      "77 kts (after 30 seconds delay).",
      "70 kts (after 1 minute delay).",
      "70 kts (after 20 seconds delay).",
      "85 kts (after 20 seconds delay).",
    ],
    answer: 2,
  },
  {
    id: 89,
    question: "The ditching switch when selected sends a closure signal to:",
    options: [
      "Outflow valve.",
      "Ram air inlet and ventilation extract valves.",
      "The pack flow control valves.",
      "All of the above.",
    ],
    answer: 3,
  },
  {
    id: 90,
    question: "In flight with pressure controller 1 in use, if it fails:",
    options: [
      "You have to use the manual control.",
      "Transfers automatically to controller 2.",
      "You have to select manually controller 2.",
      "You have to set the landing elevation.",
    ],
    answer: 1,
  },
  {
    id: 91,
    question: "In normal operation, pressurization is:",
    options: [
      "Fully automatic.",
      "Manually controlled.",
      "Automatic, but landing elevation must be manually set.",
      "Remaining automatic only with CPC 1 in use.",
    ],
    answer: 0,
  },
  {
    id: 92,
    question: "During ground function operation, the outflow valve is:",
    options: [
      "Fully open.",
      "Fully closed.",
      "Positioned accordingly to FMGS demands.",
      "Operating in abort mode.",
    ],
    answer: 0,
  },
  {
    id: 93,
    question:
      "To see the operation of the outflow valve, it is necessary to call ECAM:",
    options: ["Cond page.", "Bleed page.", "Press page.", "Vent page."],
    answer: 2,
  },
];
//AIRCONDITIONING – PRESSURIZATION – VENTILATION part 4 (94-108)///
///******CHECKED*/
export const qData5 = [
  {
    id: 94,
    question:
      "Two identical, independent, automatic digital pressurization controllers are used for system control:",
    options: [
      "One controller active, one in standby",
      "Both controllers monitored by FMGC",
      "No controller for climb phase and No.2 controller in cruise and descent",
      "No.1 controller for climb and No.2 for descent",
    ],
    answer: 0,
  },
  {
    id: 95,
    question:
      "Which controller generates excess cabin altitude and pressure signals for ECAM indication in manual mode:",
    options: ["Both", "No.1", "No.2", "Neither"],
    answer: 1,
  },
  {
    id: 96,
    question: "The safety valves are operated:",
    options: ["Electrically", "Hydraulically", "Pneumatically", "By the FMGC"],
    answer: 2,
  },
  {
    id: 97,
    question: "The purpose of the safety valves is to avoid:",
    options: [
      "Excessive positive differential pressure",
      "Excessive negative differential pressure",
      "All of the above",
    ],
    answer: 2,
  },
  {
    id: 98,
    question:
      "When mode selector is selected to manual, the outflow valve is controlled by signals sent via controller 1 or 2",
    options: ["True", "False"],
    answer: 1,
  },
  {
    id: 99,
    question:
      "On ECAM Cab. press page, the outflow valve indicator changes to amber if:",
    options: [
      "It is fully closed",
      "It is fully open on the ground",
      "It is fully open in flight",
      "It is not fully open on the ground",
    ],
    answer: 2,
  },
  {
    id: 100,
    question:
      "On ECAM Cab. press page, the safety valve indication changes to amber if:",
    options: [
      "Both safety valves are fully open",
      "Both safety valves do not open",
      "Both safety valves are fully closed",
      "One safety valve is open",
    ],
    answer: 3,
  },
  {
    id: 101,
    question:
      "On ECAM Cab. press page, the cabin altitude indication changes to red when cabin altitude is:",
    options: ["> 14,000 ft", "> 12,500 ft", "> 10,000 ft", "> 9,550 ft"],
    answer: 3,
  },
  {
    id: 102,
    question: "Following a system 1 fault:",
    options: [
      "Master caution is activated and ECAM actions must be taken by the crew",
      "The crew manually operates the system",
      "System 2 must be selected by the crew",
      "System 2 takes over automatically without any crew action",
    ],
    answer: 3,
  },
  {
    id: 103,
    question: "The pressure safety valve opens at:",
    options: ["8.06 psi", "8.6 psi", "9.0 psi", "7.0 psi"],
    answer: 1,
  },
  {
    id: 104,
    question:
      "After the engine start, the Pack Flow Control Valves automatically open, however on the ground, reopening of the valves is delayed for _____ after the first engine start.",
    options: ["30 seconds", "45 seconds", "50 seconds", "60 seconds"],
    answer: 0,
  },
  {
    id: 105,
    question:
      "The Ram Air Inlet Flaps remain open during takeoff and landing to allow extra airflow during high power situations.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    id: 106,
    question:
      "The temperature of the air that exits the compressor section is displayed above the Pack Flow. It normally displays green, but displays amber for temperatures over:",
    options: ["180 deg.C", "200 deg.C", "230 deg.C", "250 deg.C"],
    answer: 2,
  },
  {
    id: 107,
    question: "The trim air valves are _____ controlled by the zone controller",
    options: [
      "Electrically",
      "Pneumatically",
      "Hydraulically",
      "None of the above",
    ],
    answer: 0,
  },
  {
    id: 108,
    question:
      "The avionics ventilation system is not capable of using external air to provide cooling airflow",
    options: ["True", "False"],
    answer: 1,
  },
];

//AUTOFLIGHT //
///******CHECKED*/
export const qData6 = [
  {
    id: 1,
    question:
      "The Flight Management part of the FMGC includes the following elements:",
    options: [
      "Navigation, flight planning and A/THR commands.",
      "Performance optimization, A/THR and AP commands",
      "Navigation, flight planning, performance optimization and flight predictions",
      "AP and FD commands and flight envelope computation.",
    ],
    answer: 2,
  },
  {
    id: 2,
    question: "How can the present position of the aircraft be initialized?",
    options: [
      "Present position can be entered through the ADIRS CDU.",
      "Present position can be entered on the INIT page of the MCDU.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 3,
    question: "What are the correct positions for the PFD and ND?",
    options: [
      "The PFD should be outboard and the ND should be inboard.",
      "The PFD should be inboard and the ND should be outboard.",
      "The PFD should be to the left of the ND for both seat positions.",
      "The PFD should be inboard and the ND should be inboard.",
    ],
    answer: 0,
  },
  {
    id: 4,
    question:
      "What information is supplied by the IR’s and displayed on the PFD?",
    options: [
      "Heading, attitude, and vertical speed.",
      "Heading, altitude, and vertical speed",
      "Airspeed, altitude, and backup vertical speed.",
      "Heading, attitude, and altitude.",
    ],
    answer: 0,
  },
  {
    id: 5,
    question: "How long does a normal IR alignment take?",
    options: [
      "Approximately 3 minutes.",
      "Approximately 6 minutes.",
      "Approximately 10 minutes.",
      "Approximately 13 minutes.",
    ],
    answer: 2,
  },
  {
    id: 6,
    question: "The IR ALIGN light is extinguished. What does this mean?",
    options: [
      "Alignment has been completed.",
      "Air data output has been disconnected.",
      "The respective IR is operating normally.",
    ],
    answer: 0,
  },
  {
    id: 7,
    question: "An amber flashing IR FAULT light indicates that:",
    options: [
      "Present position needs to be reentered.",
      "Attitude and heading information may be recovered in ATT mode.",
      "A complete failure of the respective IR has occurred.",
    ],
    answer: 1,
  },
  {
    id: 8,
    question: "What action should be taken if IR #2 is lost:",
    options: [
      "Move the EIS DMC rotary selector knob to F/O 3.",
      "Move the ATT HDG rotary selector knob to CAPT 3.",
      "Move the ATT HDG rotary selector knob to F/O 3.",
      "Move the ATT HDG rotary selector knob to F/O 1.",
    ],
    answer: 2,
  },
  {
    id: 9,
    question: "A/THR in white means that A/THR is:",
    options: ["Disconnected.", "Armed.", "Active"],
    answer: 2,
  },
  {
    id: 10,
    question: "The white IR ALIGN light is flashing. What does this mean?",
    options: [
      "No present position has been entered and ten minutes has elapsed since the IR was selected ON.",
      "No present position has been entered and ten minutes has elapsed since the IR was selected ON. An alignment fault may exist.",
      "Attitude and heading information have been lost. An alignment fault may exist.",
    ],
    answer: 1,
  },
  {
    id: 11,
    question:
      "What message is displayed if the database effective date does not match the clock date?",
    options: [
      "Check Data Base Cycle.",
      "Check Data Base Date.",
      "Check Effective Date.",
      "Check the changeover date.",
    ],
    answer: 0,
  },
  {
    id: 12,
    question: "Placing one of the ADR push buttons OFF will accomplish what?",
    options: [
      "The OFF light will illuminate and air data output will disconnect.",
      "The respective ADIRU will become deenergized.",
      "Both AD and IR information will be disconnected.",
      "All of the above.",
    ],
    answer: 0,
  },
  {
    id: 13,
    question:
      "While in-flight, operating in Normal law, in the Alpha Prot range:",
    options: [
      "The flight controls revert to direct law.",
      "The flight controls remain in the load factor demand law.",
      "The sidestick controller and flight controls revert to the AOA mode, and side stick deflection is proportional to AOA.",
    ],
    answer: 2,
  },
  {
    id: 14,
    question: "What is the difference between -FD2 and 2FD- on the FMA?",
    options: [
      "1 inop, 2 engaged. 2 engaged, 1 off.",
      "1 off, 2 engaged. 2 engaged, 1 inop.",
    ],
    answer: 1,
  },
  {
    id: 15,
    question: "What does the LOW ACCURACY message mean?",
    options: [
      "FMGC 1 & 2 position difference exceeds limits.",
      "FMGC position & actual radio position difference exceeds limits.",
      "FMCG position & IR position difference exceeds limits.",
    ],
    answer: 1,
  },
  {
    id: 16,
    question:
      "The thrust delivered by A/THR is already at MAX CLB thrust. Is it possible to obtain some additional thrust?",
    options: [
      "Yes, by setting a higher speed target.",
      "Yes, by moving the thrust levers forward from the CL detent.",
      "No, because the A/THR already delivers the maximum available thrust.",
    ],
    answer: 1,
  },
  {
    id: 17,
    question:
      "What information is supplied by the Air Data Modules (ADMs) and displayed on the PFD’s?",
    options: [
      "Heading, attitude, and vertical speed.",
      "Airspeed, altitude, and backup vertical speed.",
      "Airspeed, vertical speed, and altitude.",
      "Airspeed, attitude, altitude, and vertical speed.",
    ],
    answer: 1,
  },
  {
    id: 18,
    question:
      "Can the autopilot be used for a single engine approach and autoland?",
    options: ["Yes.", "No."],
    answer: 0,
  },
  {
    id: 19,
    question: "During the takeoff phase:",
    options: [
      "SRS mode will provide guidance to maintain V2+10 kts (minimum) as a speed reference",
      "SRS mode is available up to 1500 ft.",
      "SRS mode will not engage if TOGA is selected.",
    ],
    answer: 0,
  },
  {
    id: 20,
    question: "If the IR mode rotary selector is selected OFF:",
    options: [
      "AD and IR information will be disconnected.",
      "AD information will be disconnected.",
      "IR information will be disconnected.",
      "The ADIRU is not energized: AD and IR information is lost.",
    ],
    answer: 3,
  },
  {
    id: 21,
    question:
      "Which of the following statements is always true when operating in alternate law?",
    options: [
      "Extending the landing gear will place the aircraft in Direct law.",
      "Extending the landing gear will place the aircraft in Mechanical backup law.",
      "Extending the landing gear will place the aircraft in Mechanical backup law.",
    ],
    answer: 0,
  },
  {
    id: 22,
    question: "Which protection is not available below 100 feet AGL?",
    options: [
      "Pitch attitude.",
      "VLS.",
      "ALPHA SPD (alpha speed)",
      "Alpha floor.",
    ],
    answer: 3,
  },
  {
    id: 23,
    question: "What does amber SPEED BRAKES mean on lower ECAM?",
    options: [
      "Speed brakes have a fault.",
      "Speed brakes are extended and flap handle is not at 0.",
      "Speed brakes are extended and engines are not at idle.",
      "All of the above.",
    ],
    answer: 2,
  },
  {
    id: 24,
    question:
      "If LOW ACCURACY message is displayed, are there any approach restrictions?",
    options: [
      "No",
      "Yes, ILS approach only.",
      "Yes, both LNAV and VNAV approaches are forbidden.",
    ],
    answer: 2,
  },
  {
    id: 25,
    question: "The DDRMI provides the pilot with:",
    options: [
      "Bearing only for VOR 1.",
      "Bearing and DME information for VOR 1 and ADF 1.",
      "Bearing and DME information for VOR 2 and ADF 2.",
      "Bearing only for VOR 1 and VOR 2.",
    ],
    answer: 3,
  },
  {
    id: 26,
    question: "The ON BAT light will illuminate amber:",
    options: [
      "When one or more IR’s are operating on aircraft battery power.",
      "For a few seconds at the beginning of the alignment process.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 27,
    question: "If both ELACs fail, what controls the elevator and stabilizer?",
    options: [
      "FACs.",
      "SECs.",
      "Elevator and stabilizer revert to mechanical backup.",
      "Backup mode of ELAC’s",
    ],
    answer: 1,
  },
  {
    id: 28,
    question: "Where is the information displayed by DMC #1 and DMC #2?",
    options: [
      "DMC #1 supplies data to PFD #2, ND #2 and LOWER ECAM. DMC #2 supplies data for PFD #1, ND #1, and UPPER ECAM.",
      "ADMC #1 supplies data to PFD #1, ND #1 and LOWER ECAM. DMC #2 supplies data for PFD #2, ND #2, and UPPER ECAM.",
      "DMC #1 supplies data to PFD #1, ND #1, and UPPER ECAM. DMC #2 supplies data for PFD #2, ND #2, and LOWER ECAM.",
      "DMC #1 supplies data to PFD #1, ND #1 and LOWER ECAM. DMC #2 supplies data for PFD #2, ND #2, and LOWER ECAM.",
    ],
    answer: 2,
  },
  {
    id: 29,
    question:
      "While in flight operating in Normal law, movement of the sidestick and subsequent return to neutral will command:",
    options: [
      "A load factor proportional to stick deflection, then maintain one G flight corrected for pitch attitude.",
      "Control surface movements proportional to stick deflection, then return the aircraft to straight and level flight.",
      "Control surface movements proportional to stick deflection, disconnect auto trim, and maintain its current attitude.",
    ],
    answer: 0,
  },
  {
    id: 30,
    question:
      "In normal law all protections are active, which of the following lists is the most complete list?",
    options: [
      "Protections, Load Factor, Pitch attitude, High AOA, and High speed.",
      "Protections, Load Factor, Pitch attitude, High AOA, Alpha floor, angle of bank, and High speed.",
      "Protections, Load Factor, Pitch attitude, High AOA, VLS, Alpha floor, and High speed.",
      "Protections, Load Factor and Pitch attitude.",
    ],
    answer: 1,
  },
  {
    id: 31,
    question:
      "When in alternate law, all protections except _______ protection will be lost.",
    options: [
      "Roll attitude.",
      "Pitch attitude.",
      "Bank angle.",
      "Load factor.",
    ],
    answer: 3,
  },
  {
    id: 32,
    question: "When does the sideslip indicator change to a blue Beta target?",
    options: [
      "Flaps configuration 1.",
      "Any EPR exceeds 1.25, and EPR’s differ by more than 0.30",
      "Heading differs from track by 20 deg or more",
      "Flaps configuration 1, 2.",
    ],
    answer: 1,
  },
  {
    id: 33,
    question:
      "High and low speed stabilities may be available in alternate law, stabilities:",
    options: [
      "Will not allow the pilot to stall the aircraft.",
      "Prohibit steep bank angles.",
      "Prohibit steep climb angles and bank angles.",
      "Can be overridden by the pilot, and it is possible to exceed Vmo, Mmo and stall the aircraft.",
    ],
    answer: 3,
  },
  {
    id: 34,
    question: "What is the function of the FACs?",
    options: [
      "Rudder and Yaw damping inputs, Flight envelope and speed computations",
      "Rudder and Yaw damping inputs",
      "Rudder and Yaw damping inputs and windshear protection",
      "Rudder and Yaw damping inputs, Flight envelope and speed computations, and windshear protection",
    ],
    answer: 3,
  },
  {
    id: 35,
    question:
      "What causes a DU to display a black screen with a white diagonal line?",
    options: [
      "The circuit breaker for that particular DU has popped.",
      "DMC failure.",
      "No power.",
    ],
    answer: 1,
  },
  {
    id: 36,
    question: "Can the aircraft be controlled with a loss of all electrics?",
    options: ["Yes.", "No."],
    answer: 0,
  },
  {
    id: 37,
    question:
      "The ATT HDG and AIR DATA selectors on the switching panel in the NORM position indicate that:",
    options: [
      "ADIRU 1 is supplying information to PFD 1 and ND 2, and ADIRU 2 is supplying power to PFD 2 and ND 1.",
      "ADIRU 1 is supplying information to PFD 1, ND 1 and the DDRMI; ADIRU 2 is supplying power to PFD 2 and ND 2.",
    ],
    answer: 1,
  },
  {
    id: 38,
    question: "What action should be taken if ADR #1 is lost?",
    options: [
      "Nothing.",
      "Move the ATT HDG knob on the switching panel to CAPT 3.",
      "Move the AIR DATA knob on the switching panel to CAPT 3.",
    ],
    answer: 2,
  },
  {
    id: 39,
    question:
      "How many Air Data/Inertial Reference Units (ADIRU’s) are installed?",
    options: ["One", "Two", "Three", "Four"],
    answer: 2,
  },
  {
    id: 40,
    question:
      "On an autoland approach, with both autopilots on, which FMGC is master?",
    options: ["FMGC 1", "FMGC 2", "Both"],
    answer: 0,
  },
  {
    id: 41,
    question:
      "After a single DMC failure, how could a crewmember recover the display units?",
    options: [
      "Once a DMC has failed the information is unrecoverable",
      "No action is needed as recovery is automatic.",
      "Rotate the EIS DMC switch on the switching panel to replace the failed DMC with DMC #3.",
    ],
    answer: 2,
  },
];

//Doors //
///******CHECKED*/
export const qData7 = [
  {
    id: 1,
    question:
      "How is it determined that the cockpit sliding window is closed and locked?",
    options: [
      "The pin is engaged.",
      "The red ring below the release button should not be in view.",
      "The locking pin was placed in the forward position when the window was closed.",
      "The red ring below the release button should be in view.",
    ],
    answer: 3,
  },
  {
    id: 2,
    question:
      "Opening a passenger door from the outside disarms the door and the escape slide.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 3,
    question:
      "What does illumination of the red cabin pressure light represent on the main cabin door?",
    options: [
      "This indicates that the evacuation slide is armed.",
      "This indicates that the aircraft cabin is still pressurized and the cabin door should not be opened.",
      "Both are correct.",
    ],
    answer: 1,
  },
  {
    id: 4,
    question: "The cargo doors are powered by:",
    options: [
      "The blue electric pump.",
      "The yellow hydraulic system before engine start and the green hydraulic system after engine start.",
      "The yellow hydraulic system.",
      "The blue hydraulic system before engine start and the green hydraulic system after engine start.",
    ],
    answer: 2,
  },
  {
    id: 5,
    question: "The forward and aft cargo doors can be opened from:",
    options: ["The inside and the outside.", "The outside only."],
    answer: 1,
  },
  {
    id: 6,
    question:
      "On the ECAM DOOR/OXY page, the SLIDE indication appears _____ when the slide is not disarmed.",
    options: ["White.", "Amber.", "Green.", "Red."],
    answer: 0,
  },
  {
    id: 7,
    question: "Each passenger door has one CABIN PRESSURE warning light that:",
    options: [
      "Warns of residual pressure in the cabin.",
      "Shows a possible unlocked door.",
      "Both are correct.",
    ],
    answer: 0,
  },
  {
    id: 8,
    question:
      "Where does the Door and Slide Control System (DSCS) generate warnings?",
    options: ["On ECAM.", "On the doors.", "Both are correct."],
    answer: 2,
  },
  {
    id: 9,
    question: "What happens to the cockpit door with electrical power failure?",
    options: [
      "It operates normally on HOT BAT bus.",
      "It automatically unlocks.",
      "It automatically locks from outside but stays unlock from inside.",
    ],
    answer: 1,
  },
  {
    id: 10,
    question: "The cockpit windows can be opened both from inside and outside.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 11,
    question:
      "What does illumination of the white slide armed light represent on the main cabin door?",
    options: [
      "This indicates that the slide has properly inflated and is safe for use.",
      "This indicates that the slide is armed and the slide will inflate if the door is opened from inside the aircraft.",
      "This indicates that the main cabin door has not been properly closed.",
      "This indicates that the main cabin door has not been properly closed but the slide is properly armed.",
    ],
    answer: 1,
  },
  {
    id: 12,
    question:
      "Can the flight compartment sliding windows be used as emergency exits?",
    options: [
      "Yes, in the cockpit coat closet is a rope ladder that can be used in such an event.",
      "Yes, there are escape ropes mounted above each window behind an access panel.",
      "No. They are not approved emergency exits.",
      "No, they are too small.",
    ],
    answer: 1,
  },
  {
    id: 13,
    question:
      "When the electric pump is operating the FWD or AFT cargo doors, the only other yellow system devices that can operate are braking and engine 2 reverse.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 14,
    question:
      "When the slide arming lever, on the emergency opening system, is in the ARMED position, where is the slide connected?",
    options: [
      "To the brackets on the underside of the fuselage.",
      "To the brackets above the door.",
      "To the floor brackets on both sides of the door.",
      "All of the above.",
    ],
    answer: 2,
  },
  {
    id: 15,
    question:
      "When the Cargo door switch for the yellow hydraulic pump is in use, the flight controls are:",
    options: [
      "Fully operational",
      "Inhibited",
      "Hydraulically locked by pressure from the electric pump",
      "Only operated by the green system.",
    ],
    answer: 1,
  },
  {
    id: 16,
    question: "When opened in an emergency, the passenger entry doors:",
    options: [
      "Pneumatically assisted into the open position",
      "Will need two cabin crew to push them open",
      "Are assisted to the open position by slide inflation",
      "Are electrically assisted into the open position.",
    ],
    answer: 0,
  },
  {
    id: 17,
    question:
      "If door handle is lifted and the white indicator illuminates, what does this mean?",
    options: [
      "The escape slide is armed and if you go on lifting the handle, door opens and slide will deploy.",
      "Pneumatic assistance of the door has failed",
      "The escape slide is in disarmed configuration",
      "The cabin is still pressurized.",
    ],
    answer: 0,
  },
  {
    id: 18,
    question:
      "What happens if a door damper and emergency cylinder is low pressure?",
    options: [
      "The cabin crew is informed via CIDS on the Forward Attendant Panel to Flight Attendant Panel (FAP).",
      "The Flight Crew is informed via the engine and Warning Display.",
      "The crew is not informed at all.",
    ],
    answer: 0,
  },
  {
    id: 19,
    question:
      "How can you safely remove an A320 overwing emergency exit door for maintenance reasons?",
    options: [
      "After disarming the slide release mechanism and installing the safety pin in the slide bottle valve.",
      "Disarming the slide release mechanism is sufficient.",
      "From outside the cabin, no precautions are necessary.",
    ],
    answer: 0,
  },
  {
    id: 20,
    question:
      "What happens with the cargo door operation if a manually operated sill latch is lowered?",
    options: [
      "The operation is electrically inhibited, but still possible by using the hand pump.",
      "The operation is not possible at all.",
      "The operation is possible in all modes.",
    ],
    answer: 0,
  },
  {
    id: 21,
    question:
      "Which of the following can be used to confirm correct engagement of the girt bar?",
    options: [
      "The illumination of the white indicator light on the door panel.",
      "The Emergency Control handle remaining in the ARMED position.",
      "The girt bar visual indicator.",
    ],
    answer: 2,
  },
  {
    id: 22,
    question:
      "On the Enhanced aircraft, what is the main purpose of the latching shaft in the cargo door?",
    options: [
      "To drive the vent panel.",
      "To operate the locking hooks.",
      "To secure the locking hooks in the closed position.",
    ],
    answer: 1,
  },
  {
    id: 23,
    question:
      "When will the white 'SLIDE ARMED' (A320) illuminate on the overwing emergency door?",
    options: [
      "When the latch pin is armed and when the handle cover is removed.",
      "When the latch pin is armed and when the handle is moved 15°.",
      "When the latch pin is disarmed and the handle cover is removed.",
    ],
    answer: 0,
  },
  {
    id: 24,
    question: "Where are the slats attached?",
    options: [
      "To the front spar of the wing.",
      "To the rear spar of the wing.",
      "To the center wing box.",
    ],
    answer: 0,
  },
  {
    id: 25,
    question: "How are steel parts protected against corrosion?",
    options: [
      "By yellow chromating of chromic acid anodizing.",
      "By cadmium, zinc, or aluminium plating.",
      "By cadmium plating, chrome plating, or phosphating.",
    ],
    answer: 2,
  },
  {
    id: 26,
    question: "Where is the spoiler 1 attached to the wing?",
    options: ["To the front spar.", "To the rear spar.", "To the false spar."],
    answer: 2,
  },
  {
    id: 27,
    question:
      "Which component transmits the overall fuselage bending loads in the area of the MLG?",
    options: ["Landing Gear Doors.", "False Spar.", "Keel beam."],
    answer: 2,
  },
];

//PNEUMATICS //
///******CHECKED*/
export const qData8 = [
  {
    id: 1,
    question: "Engine bleed air temperature is controlled by:",
    options: [
      "Engine oil.",
      "A pre-cooler that uses fan air.",
      "Conditioned air from the mixing unit.",
    ],
    answer: 1,
  },
  {
    id: 2,
    question: "If BMC1 fails BMC2 takes over all monitoring functions except:",
    options: [
      "Engine 1 and APU leak detection.",
      "Overheat detection.",
      "Automatic cross-bleed valve control.",
    ],
    answer: 0,
  },
  {
    id: 3,
    question: "Bleed air normally comes from the _______ of the engine.",
    options: [
      "High pressure stage.",
      "Intermediate stage.",
      "Low pressure stage.",
    ],
    answer: 1,
  },
  {
    id: 4,
    question:
      "In flight if the air pressure is insufficient even with the HP valve open:",
    options: [
      "The engine spools up automatically.",
      "Engine power has to be increased by the pilot.",
      "Push the High Pressure P/B on the ovhd panel.",
    ],
    answer: 0,
  },
  {
    id: 5,
    question:
      "The pressure regulating and shutoff valve will close if _______ pressure is _______ or _______ airflow occurs",
    options: [
      "Downstream / low / reverse",
      "Downstream / High / reverse",
      "Upstream / low / reverse",
    ],
    answer: 2,
  },
  {
    id: 6,
    question:
      "The crossbleed valve has two electric motors; one for the automatic mode and one for the manual mode:",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 7,
    question: "The overheat detection system uses a single loop for:",
    options: [
      "The pylons and APU.",
      "The wings and pylons.",
      "The wings and fuselage.",
    ],
    answer: 0,
  },
  {
    id: 8,
    question: "The APU BLEED FAULT light illuminates amber for an APU:",
    options: ["Overheat.", "Malfunction.", "Bleed leak."],
    answer: 2,
  },
  {
    id: 9,
    question:
      "The AUTO position of the X BLEED selector opens the crossbleed if:",
    options: [
      "An engine bleed valve is open.",
      "The APU bleed valve is open.",
      "When engine start is selected.",
    ],
    answer: 1,
  },
  {
    id: 10,
    question:
      "Recirculation fans in the air conditioning system direct filtered cabin air to which area?",
    options: [
      "The pneumatic duct; upstream of the packs.",
      "The avionics compartment.",
      "The Mixing unit.",
    ],
    answer: 2,
  },
  {
    id: 11,
    question: "Temperature regulation for the A320 is controlled by:",
    options: [
      "One zone controller and two pack controllers.",
      "Two pack controllers and the BMC’s.",
      "The BMC’s",
    ],
    answer: 0,
  },
  {
    id: 12,
    question: "Should both channels fail in a zone controller:",
    options: [
      "Temperature optimization is still available for that zone from another controller.",
      "Temperature optimization and the backup mode are lost.",
      "The pack is not affected.",
    ],
    answer: 1,
  },
  {
    id: 13,
    question: "The lavatory/galley extract fan operates:",
    options: [
      "Only on the ground.",
      "Only in flight.",
      "Continuously when electrical power is available.",
    ],
    answer: 2,
  },
  {
    id: 14,
    question:
      "If bleed air is being supplied by the APU or if one pack fails; pack flow will go to what rate?",
    options: ["Low.", "Medium.", "High."],
    answer: 2,
  },
  {
    id: 15,
    question:
      "What happens to the outflow valve when the RAM AIR switch is selected ON?",
    options: [
      "The outflow valve opens immediately.",
      "The outflow valve opens if cabin differential pressure is less than 1 psi.",
      "Normal outflow valve control is maintained.",
    ],
    answer: 1,
  },
  {
    id: 16,
    question:
      "When either the BLOWER or EXTRACT switches are in OVRD; air from the air conditioning system is added to ventilation air.",
    options: ["True.", "False"],
    answer: 0,
  },
  {
    id: 17,
    question: "How many motors are available for the outflow valve?",
    options: ["1", "2", "3"],
    answer: 2,
  },
  {
    id: 18,
    question: "Transfer between the two cabin pressure controllers is:",
    options: [
      "Accomplished with a switch overhead.",
      "Automatic after landing or in case the operating controller fails.",
      "Automatically at each takeoff.",
    ],
    answer: 1,
  },
  {
    id: 19,
    question: "The maximum cabin descent rate is limited in automatic to:",
    options: ["300 ft/min.", "750 ft/min.", "1000 ft/min."],
    answer: 1,
  },
  {
    id: 20,
    question:
      "The third motor (manual) in the pressurization system is activated:",
    options: [
      "Automatically if both automatic motors fail.",
      "In sequence after each landing.",
      "When the CABIN PRESS MODE SEL switch is positioned to MAN.",
    ],
    answer: 2,
  },
  {
    id: 21,
    question:
      "When the cabin vertical speed exceeds _______ fpm; the vertical speed display on ECAM _______.",
    options: [
      "800 / flashes green",
      "2800 / flashes green",
      "1800 / flashes green",
    ],
    answer: 2,
  },
  {
    id: 22,
    question: "The pneumatic system supplies high pressure air for:",
    options: [
      "Air Conditioning, water pressurization and engine starting",
      "Wing anti-icing.",
      "Hydraulic reservoir pressurization.",
      "All of the above.",
    ],
    answer: 3,
  },
  {
    id: 23,
    question: "High pressure air has ______ sources.",
    options: ["2", "3", "4", "5"],
    answer: 1,
  },
  {
    id: 24,
    question:
      "With both engines operating, an ENG BLEED pb FAULT light will illuminate when:",
    options: [
      "The valve position differs from that of the push button.",
      "The X BLEED selector is selected to SHUT.",
      "The X BLEED selector is selected to OPEN.",
      "The X BLEED selector is selected to OPEN or to SHUT.",
    ],
    answer: 0,
  },
  {
    id: 25,
    question: "Air bleed from the engines is:",
    options: [
      "Not cooled prior to being used by the systems.",
      "Cooled in a heat exchanger by cooling air bleed from Fan section.",
      "Cooled using ambient air.",
      "Only cooled in air conditioning part.",
    ],
    answer: 1,
  },
  {
    id: 26,
    question: "If a Bleed Monitoring Computer (BMC) fails:",
    options: [
      "All systems associated with the failed BMC also fail.",
      "The associated bleed valves close.",
      "The remaining BMC will automatically assume most of the failed BMC’s functions.",
    ],
    answer: 2,
  },
  {
    id: 27,
    question:
      "A leak detection system detects any overheating in the vicinity of hot air ducts.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 28,
    question:
      "When engine and wing anti-ice are in use, and a BMC detects a bleed leak:",
    options: [
      "Only the engine anti-ice on the associated side will be lost.",
      "The wing and engine anti-ice on the associated side will be lost.",
      "The wing anti-ice on the associated side will be lost, and the engine anti-ice on the associated side will continue to function.",
    ],
    answer: 2,
  },
  {
    id: 29,
    question:
      "Each bleed valve is electrically operated and controlled pneumatically by its associated BMC.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 30,
    question: "If a BMC detects a bleed leak:",
    options: [
      "The crew must isolate the affected leak.",
      "All valves that could supply pneumatic air to the area of the bleed leak will automatically close.",
      "All pneumatic valves close automatically.",
    ],
    answer: 1,
  },
  {
    id: 31,
    question:
      "If one BMC fails, the adjacent BMC takes over the monitoring of the bleed system to issue the following ECAM warnings if necessary:",
    options: [
      "Overpressure",
      "Overtemperature",
      "Wing leak",
      "All of the above.",
    ],
    answer: 3,
  },
  {
    id: 32,
    question:
      "Bleed leak protection for the APU pneumatic duct is provided by:",
    options: [
      "Detection loops associated with BMC #1.",
      "Detection loops associated with BMC #2.",
      "The APU BMC.",
      "All of the above.",
    ],
    answer: 0,
  },
  {
    id: 33,
    question:
      "With the loss of pneumatic system pressure, the engine bleed valve will:",
    options: [
      "Remain in its current position.",
      "Assume the mid position.",
      "Assume the open position.",
      "Assume the closed position.",
    ],
    answer: 3,
  },
  {
    id: 34,
    question: "Pneumatic system operation is controlled and monitored by:",
    options: [
      "One bleed monitoring computer.",
      "Two bleed valve computers.",
      "Two bleed monitoring computers.",
    ],
    answer: 2,
  },
  {
    id: 35,
    question: "ECAM BLEED page: when is the GND symbol displayed?",
    options: [
      "Whenever the aircraft is on the ground.",
      "All the time.",
      "Only when a ground air supply is connected.",
    ],
    answer: 0,
  },
  {
    id: 36,
    question:
      "In automatic mode, the crossbleed valve opens when the system is using APU bleed air.",
    options: [
      "It closes if the system detects an air leak (except during engine start).",
      "It closes if the system detects an air leak (except in flight).",
      "It closes automatically if the system detects an air leak.",
    ],
    answer: 0,
  },
  {
    id: 37,
    question:
      "What happens when pressure and temperature are not sufficient to supply the corresponding engine bleed valve?",
    options: [
      "HP valve closes.",
      "HP valve opens, if stage closed.",
      "HP valve opens, IP stage remains in the same configuration.",
    ],
    answer: 2,
  },
  {
    id: 38,
    question:
      "When additional pneumatic air is required for anti-ice, engine starting, or air conditioning:",
    options: [
      "Additional pneumatic air will be requested by the BMC to the FADECs or the APU.",
      "The crew must observe minimum N1 limits.",
      "Both are correct.",
    ],
    answer: 0,
  },
  {
    id: 39,
    question: "When selected, APU bleed air:",
    options: [
      "Will supply bleed air only if the ENG BLEED pb’s are selected OFF.",
      "Has priority over engine bleed air.",
      "Will supply bleed air only if the X BLEED selector is selected OPEN.",
      "Does not have priority over engine bleed air.",
    ],
    answer: 1,
  },
  {
    id: 40,
    question:
      "With the APU running, the APU BLEED push button selected ON and the X BLEED selector to AUTO, the APU will:",
    options: [
      "Only supply bleed air to the left side.",
      "Supply pneumatic air to both sides of the aircraft because the pneumatic crossbleed valve automatically opens.",
      "Will supply bleed air only to the left side unless the X BLEED selector is selected OPEN.",
      "Only supply bleed air to the right side.",
    ],
    answer: 1,
  },
  {
    id: 41,
    question: "Which source controls the crossbleed valve?",
    options: ["Pneumatic.", "Electric."],
    answer: 1,
  },
  {
    id: 42,
    question: "The crew may directly control the following bleed valves:",
    options: [
      "Engine, engine high pressure, APU.",
      "Engine, intermediate pressure, APU.",
      "Engine, APU, crossbleed.",
      "Crossbleed.",
    ],
    answer: 2,
  },
  {
    id: 43,
    question:
      "APU bleed air supplies the pneumatic system if the APU speed is above _____:",
    options: ["80%", "85%", "92%", "95%"],
    answer: 3,
  },
  {
    id: 44,
    question:
      "A check valve near the crossbleed duct protects the APU when bleed air comes from another source:",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 45,
    question:
      "Temperature regulation is achieved by the precooler which regulates and limits the temperature at:",
    options: ["150°C", "85°C", "60°C", "200°C"],
    answer: 3,
  },
];

//FUEL //
///******CHECKED*/
export const qData9 = [
  {
    id: 1,
    question:
      "Refueling is possible if the aircraft batteries are the only source of power.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 2,
    question:
      "With the center tank pump mode SEL switch in AUTO; the center tank pumps:",
    options: [
      "Run for two minutes after both engines are running.",
      "Will not restart until slats are retracted in flight.",
      "Continue to run until five minutes after the center tank is empty.",
      "All the above.",
    ],
    answer: 3,
  },
  {
    id: 3,
    question:
      "Fuel transfer from the outer compartment to the inner compartment of the wing tanks occurs when the inner compartment quantity decreases to:",
    options: [
      "250 kilograms",
      "450 kilograms",
      "750 kilograms",
      "5000 kilograms",
    ],
    answer: 2,
  },
  {
    id: 4,
    question:
      "What indication will you see on the overhead fuel panel if the center tank has more than 250 kilograms of fuel and the left or right wing tank have less than 5,000 kilograms.",
    options: [
      "Auto feed fault.",
      "Fuel imbalance.",
      "Mode select fault.",
      "Fuel - Auto feed fault.",
    ],
    answer: 2,
  },
  {
    id: 5,
    question: "The Fuel Used indication on ECAM is reset:",
    options: [
      "Manually by the pilot.",
      "Automatically at engine start on the ground.",
      "Automatically at electric power up of the aircraft.",
    ],
    answer: 1,
  },
  {
    id: 6,
    question:
      "The fuel quantity indication on ECAM for the outer cell is boxed amber if:",
    options: [
      "One transfer valve fails to open.",
      "Outer cell fuel temperature is high.",
      "Both transfer valves fail to open when inner cell is at low level.",
    ],
    answer: 2,
  },
  {
    id: 7,
    question:
      "An amber line appears across the last two digits of the ECAM FOB indication when:",
    options: [
      "Fuel quantity is unreliable.",
      "The center tank pumps are switched off.",
      "The center tank pumps have failed.",
    ],
    answer: 0,
  },
  {
    id: 8,
    question: "The fuel crossfeed valve is controlled by 2 motors.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 9,
    question:
      "Which of the following would cause the fault light to illuminate on the MODE SEL push button?",
    options: [
      "Fuel is being burned out of sequence.",
      "Crossfeed push button is ON.",
      "Center tank pumps do not stop after slat extension.",
      "Center tank pumps do not stop 5 min after center tank low level reached.",
    ],
    answer: 0,
  },
  {
    id: 10,
    question:
      "The message CTR TK FEEDG appears in the MEMO. What does this mean?",
    options: [
      "The center tank fuel mode selector is OFF.",
      "The center tank pumps are OFF.",
      "At least one center tank pump is energized.",
      "A reminder to switch the center tank pumps OFF.",
    ],
    answer: 2,
  },
  {
    id: 11,
    question: "From which tanks will fuel gravity feed?",
    options: [
      "Outer cell of the wing tanks, inner cell of the wing tanks, and/or center tank.",
      "Inner cell of the wing tanks, and center tank.",
      "Outer cell of the wing tanks, and inner cell of the wing tanks.",
      "The center tank only.",
    ],
    answer: 2,
  },
  {
    id: 12,
    question:
      "Center tank pumps do not stop 5 min after center tank low level reached.",
    options: [
      "Yes, only on the refueling panel.",
      "It is not possible to determine their position",
      "Only on the ECAM Fuel page.",
    ],
    answer: 2,
  },
  {
    id: 13,
    question:
      "During normal operations when should the fuel transfer valves open?",
    options: [
      "When a low level is sensed in the center tank.",
      "When a low level is sensed in either outer wing cell.",
      "When low level is sensed in either inner wing cell.",
    ],
    answer: 2,
  },
  {
    id: 14,
    question:
      "What does an amber line across the last two digits of the fuel quantity mean?",
    options: [
      "The fuel quantity indication is inaccurate.",
      "The fuel quality is not good and should be checked.",
      "A disagreement between fuel measured and fuel entered on the MCDU has been detected.",
      "Not all the fuel aboard is usable.",
    ],
    answer: 0,
  },
  {
    id: 15,
    question: "The APU fuel system:",
    options: [
      "Uses its own dedicated DC powered fuel pump.",
      "Obtains fuel from either center tank pump.",
      "Obtains fuel from the left fuel manifold via the left side fuel pumps or if needed, the APU fuel pump.",
      "Obtains fuel from the left fuel manifold via the right side fuel pumps.",
    ],
    answer: 2,
  },
  {
    id: 16,
    question:
      "With fuel in the center tank, the CTR TK MODE SEL push button selected to AUTO and the CTR TK PUMP push buttons ON (lights out), the center tank pumps:",
    options: [
      "Will operate for a short period after the first engine MASTER switch is selected ON and while slats are retracted.",
      "They will continue to run until the center tank is empty or slats are extended.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 17,
    question:
      "The AC powered auxiliary fuel boost pump for the APU operates whenever the APU is operating and no other pump is on. it has an alternate power source on the AC Static Inverter bus for battery-only starts.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 18,
    question:
      "After engine start, center tank fuel pumps run for ______ minutes regardless of slat position.",
    options: ["1 minute.", "2 minutes.", "3 minutes.", "5 minutes."],
    answer: 1,
  },
  {
    id: 19,
    question:
      "The message OUTER TK FUEL XFRD appears in the MEMO. What does this mean?",
    options: [
      "It is a reminder to show that a transfer valve is open.",
      "Fuel is transferring from the center tank to the inner tank.",
      "It is a reminder to open the outer tank transfer valve.",
      "Fuel is transferring from the inner tank to the outer tank.",
    ],
    answer: 0,
  },
  {
    id: 20,
    question: "The wing fuel transfer valves are:",
    options: [
      "Manually controlled and open when the MODE SEL push button is selected to MAN.",
      "Are electrically held closed.",
      "Open automatically at the start of refueling.",
      "Automatically close if a low level is sensed in either main wing tank, they automatically close at the next fueling.",
    ],
    answer: 1,
  },
  {
    id: 21,
    question:
      "Why do the center tank pumps stop automatically when the slats are extended for takeoff?",
    options: [
      "To keep the center of gravity as low as possible.",
      "Dumping takeoff, the center tank fuel is pumped to the rear to trim aircraft",
      "To ensure that the engines are fed from the wing tanks for takeoff (feeding segregation)",
      "During takeoff, the center tank fuel is gravity fed only.",
    ],
    answer: 2,
  },
  {
    id: 22,
    question: "What precaution should you observe when gravity feeding fuel?",
    options: [
      "Operate the aircraft below 15,000 feet.",
      "Use center tank first.",
      "Open the crossfeed when above FL250",
      "No precautions are necessary.",
    ],
    answer: 0,
  },
  {
    id: 23,
    question:
      "Refueling time at normal pump pressure is _____ minutes for the wing tanks and _____ minutes for all tanks.",
    options: ["15 & 25.", "17 & 20.", "15 & 20.", "25 & 35."],
    answer: 1,
  },
  {
    id: 24,
    question:
      "After engine shutdown, what are your actions to close the fuel transfer valves?",
    options: [
      "You have to switch the inner tank pumps off.",
      "You have to call maintenance to close the valves.",
      "No action is required. The valves will close automatically during the next refueling.",
    ],
    answer: 2,
  },
  {
    id: 25,
    question: "Fuel can be transferred from tank to tank:",
    options: [
      "Only on the ground.",
      "In flight if the fuel X FEED push button is selected OPEN.",
      "In flight if the fuel X FEED push button is selected OPEN and center tank MODE SEL push button is selected to MAN.",
      "Fuel can never be transferred.",
    ],
    answer: 0,
  },
  {
    id: 26,
    question:
      "How has the fuel been transferred from the outer to the inner tanks?",
    options: [
      "By setting the MODE SEL pushbutton to MAN.",
      "The transfer valve has been opened automatically by the low-level sensor in the center tanks",
      "By setting the MODE SEL PB to AUTO",
      "The transfer valve has been opened automatically by the low-level sensor in the inner tank.",
    ],
    answer: 3,
  },
  {
    id: 27,
    question: "What is the minimum fuel quantity for takeoff?",
    options: ["1,000 kg", "1,200 kg.", "1,500 kg", "2,000 kg"],
    answer: 2,
  },
];

//ICE AND RAIN PROTECTION //
///******CHECKED*/
export const qData10 = [
  {
    id: 1,
    question: "The ______ on each wing are anti-iced with pneumatic bleed air.",
    options: ["Slats", "Flaps", "Three outboard slats"],
    answer: 2,
  },
  {
    id: 2,
    question: "Electrical heating is provided for the protection of:",
    options: [
      "Pitots and Angle Of Attack (AOA) probes",
      "Pitots, static ports and TAT probes",
      "Pitots, static ports, AOA probes, and TAT probes.",
      "Pitots and static ports",
    ],
    answer: 2,
  },
  {
    id: 3,
    question: "When a pneumatic leak is detected, the wing anti-ice valves:",
    options: [
      "Close automatically.",
      "Open automatically.",
      "Remain in position.",
    ],
    answer: 0,
  },
  {
    id: 4,
    question: "When either engine anti-ice valve is open:",
    options: [
      "Maximum N1 is increased.",
      "Minimum idle rpm is increased.",
      "Minimum idle rpm is reduced.",
    ],
    answer: 1,
  },
  {
    id: 5,
    question: "Window heat operates at what power level in flight?",
    options: ["Low", "High"],
    answer: 1,
  },
  {
    id: 6,
    question: "On the ground the wing anti-ice valves will:",
    options: [
      "Open during a test sequence (30 seconds); provided pneumatic supply is available.",
      "Not open at anytime.",
      "Open any time the switch is pushed “ON”.",
    ],
    answer: 0,
  },
  {
    id: 7,
    question: "Probe heat comes on automatically when:",
    options: [
      "The AC ESS bus is powered.",
      "Electrical power is applied to the aircraft.",
      "When at least one engine is running *",
    ],
    answer: 2,
  },
  {
    id: 8,
    question:
      "With reference to the PROBE/WINDOW HEAT pushbutton, which of the following is true?",
    options: [
      "The system should only be selected ON in icing conditions.",
      "When in AUTO mode, the windows are heated only when necessary.",
      "The system should only be selected ON after first engine start.",
      "Window heating comes on automatically after first engine start *",
    ],
    answer: 3,
  },
  {
    id: 9,
    question: "The drain masts are heated after first engine start.",
    options: ["True.", "False *"],
    answer: 0,
  },
  {
    id: 10,
    question: "Where do the wing anti-ice indications appear on ECAM?",
    options: [
      "There is no indication on ECAM bleed page for wing anti-ice",
      "An amber triangle appears on the ECAM bleed page",
      "WING A.ICE appears on ECAM status page.",
      "ANTI-ICE appears in white on the ECAM bleed page and W A.ICE appears in green on the ECAM memo when the wing P/B is pressed",
    ],
    answer: 3,
  },
  {
    id: 11,
    question:
      "The Fault light on the engine anti-ice switches indicates the valve:",
    options: [
      "Is closed.",
      "Position disagrees with switch position.",
      "Is open.",
    ],
    answer: 1,
  },
  {
    id: 12,
    question:
      "What is the difference between the engine and wing anti-ice fault lights?",
    options: [
      "Both indicate valve in transit, or valve position disagrees with selected position. Wing light also could indicate low pressure.",
      "Both indicate low pressure, or valve position disagrees with selected position. Wing light might indicate valve in transit.",
      "Both indicate valve in transit, or low pressure. Wing light also could indicate valve position disagrees with selected position.",
      "Both indicate valve in transit, or overheat",
    ],
    answer: 0,
  },
  {
    id: 13,
    question:
      "If one engine anti-ice system fails, the second one takes over and provides anti-icing for both engines.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 14,
    question: "What happens when either engine anti-ice is open?",
    options: [
      "Maximum N1 is limited, continuous ignition is provided, maximum idle RPM is increased.",
      "Maximum N1 is limited, continuous ignition is provided, minimum RPM is increased.",
      "Minimum N1 is limited, continuous ignition is provided, minimum idle RPM is increased",
    ],
    answer: 1,
  },
  {
    id: 15,
    question:
      "In the event of loss of electrical supply the engine anti-ice valve:",
    options: [
      "Opens when the engine is shut down.",
      "Closes when the engine is running.",
      "Opens when the engine is running.",
      "Open when the OAT is < 10 deg.C with the engine running",
    ],
    answer: 2,
  },
  {
    id: 16,
    question: "With the loss of electrical power the wing anti-ice valves:",
    options: [
      "Fail in their current position.",
      "Fail to the open position.",
      "Fail to the closed position.",
    ],
    answer: 2,
  },
  {
    id: 17,
    question: "What is the speed limit to operate the windscreen wipers?",
    options: ["185 kts.", "200 kts.", "230 kts.", "250 kts."],
    answer: 2,
  },
  {
    id: 18,
    question: "In the event of an electrical power loss:",
    options: [
      "The engine anti-ice valves will open automatically, anti-icing is ensured.",
      "The engine anti-ice valves will close automatically, anti-icing is lost.",
      "The engine anti-ice valves will be controlled by the wing anti-ice controls.",
      "The engine anti-ice valves remain in the position they were before.",
    ],
    answer: 0,
  },
  {
    id: 19,
    question: "At what power level does window heat operate while airborne?",
    options: [
      "High power while airborne.",
      "Shifts from low to high as window temperature requires.",
      "Low power above 18,000 ft.",
      "Low power above 25,000 ft.",
    ],
    answer: 0,
  },
  {
    id: 20,
    question:
      "What happens to engine RPM when either engine anti-ice valve is open?",
    options: [
      "There is a fixed RPM increase.",
      "The N1 limit for that engine is automatically increased.",
      "The N1 limit for that engine is automatically reduced",
      "There is a fixed RPM increase (3% of nominal N1)",
    ],
    answer: 2,
  },
  {
    id: 21,
    question: "Window heat operation begins:",
    options: [
      "Automatically after the first engine start.",
      "if the PROBE/WINDOW HEAT push button is selected ON by the crew prior to engine start.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 22,
    question: "Rain protection is provided by:",
    options: [
      "Warm bleed air blowing across the windshield.",
      "Rain repellent and Windshield wipers.",
      "Both are correct.",
    ],
    answer: 1,
  },
  {
    id: 23,
    question: "Can the wing anti-ice be tested on the ground?",
    options: [
      "Yes, with valves only open for 30 seconds.",
      "Yes. Valves stay open till selected off.",
      "No.",
    ],
    answer: 0,
  },
  {
    id: 24,
    question: "Anti-ice and de-icing protection is provided for:",
    options: [
      "The engine nacelles and three outboard wing slats.",
      "The engine nacelles, the horizontal stabilizer, and three outboard wing slats.",
      "The engine nacelles, the horizontal stabilizer, the vertical stabilizer and three outboard wing slats.",
    ],
    answer: 0,
  },
  {
    id: 25,
    question:
      "The probe heaters can be activated manually prior to engine start by placing the PROBE/WINDOW HEAT pushbutton.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 26,
    question:
      "What happens to the heat at the drain masts when the aircraft is on the ground?",
    options: [
      "Nothing.",
      "The heat is reduced to prevent injury to ground personnel.",
      "Some of them are automatically switched off (pitot, AOA).",
    ],
    answer: 1,
  },
  {
    id: 27,
    question:
      "The RAIN RPLNT (rain repellent) pushbutton is inhibited on the ground when the engines stopped.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 28,
    question: "TAT probes are heated on the ground.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 29,
    question: "The ON light illuminates on the wing anti-ice P/B:",
    options: [
      "When the anti-ice valves open",
      "When the P/B is set to ON",
      "When the fault light goes out",
      "When the anti-ice valves open and the fault light goes out.",
    ],
    answer: 1,
  },
  {
    id: 30,
    question: "How is window heating regulated?",
    options: [
      "Manually by flight crew",
      "Window heat is not regulated!",
      "One Window Heat Computer (WHC) as master, the other as slave",
      "By two independent Window Heat Computers (WHC), one for each side",
    ],
    answer: 3,
  },
  {
    id: 31,
    question:
      "The Window Heat Computer provides two power levels for the windshield:",
    options: [
      "High power when above 20,000 ft, low power when below 20,000 ft",
      "High power when OAT < 10 deg.C, low power when OAT> 10 deg.C",
      "High power in flight, low power on the ground",
      "High power in icing conditions (flight only), low power in other conditions.",
    ],
    answer: 3,
  },
  {
    id: 32,
    question: "The engine nacelle is anti-iced by:",
    options: [
      "Air bleed from the high pressure compressor",
      "Air bleed from low pressure compressor",
      "AC system and air bleed from low pressure compressor",
      "DC system and air bleed from low pressure compressor.",
    ],
    answer: 0,
  },
  {
    id: 33,
    question: "When an engine anti-ice valve is open:",
    options: [
      "N1 limit is automatically reduced and the idle N1 is automatically increased",
      "N2 of the associated engine is automatically decreased",
      "N2 limit is automatically reduced and N1 limit is automatically increased",
      "There is no change in the N1 and N2 limits.",
    ],
    answer: 0,
  },
  {
    id: 34,
    question: "In the event of a low air pressure:",
    options: [
      "The engine anti-ice valve opens automatically",
      "There is no effect on the anti-ice valve position",
      "The engine anti-ice valve must be manually closed",
      "The engine anti-ice valve closes automatically",
    ],
    answer: 3,
  },
  {
    id: 35,
    question: "How can you check that engine anti-ice has been selected on?",
    options: [
      "You can observe the ON light on the associated engine anti-ice P/B and the ENGINE ANTI-ICE message on the ECAM engine page",
      "You can observe the amber warning on the ECAM memo display and the amber anti-ice light on the overhead panel",
      "You can observe the ENGINE ANTI-ICE message on the ECAM STATUS page",
      "You can observe the blue ON light on the associated engine anti-ice P/B and the ENGINE ANTI-ICE memo on the E/WD",
    ],
    answer: 3,
  },
  {
    id: 36,
    question: "The electric windshield wipers are controlled:",
    options: [
      "Automatically when in heavy rain",
      "By two individual pushbuttons",
      "By one rotary selector for both windshields",
      "By two individual rotary selectors",
    ],
    answer: 3,
  },
  {
    id: 37,
    question: "The wipers can operate at different speeds:",
    options: [
      "Low speed and high speed",
      "Speed 1 and speed 2",
      "Low, medium and high speed.",
      "Speed is automatically adjusted depending on rain intensity.",
    ],
    answer: 0,
  },
  {
    id: 38,
    question: "When the wiper is turned off:",
    options: [
      "The PARK position must be selected to stow the wiper",
      "It continues to run for approximately 6 seconds",
      "The wiper may stop in the pilots view",
      "The wiper stops out of view",
    ],
    answer: 3,
  },
];

//HYDRAULIC SYSTEM //
///******CHECKED*/
export const qData11 = [
  {
    id: 1,
    question: "Fluid can be transferred between hydraulic systems.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    id: 2,
    question: "Which hydraulic systems have engine driven pumps?",
    options: ["Green and blue.", "Green and yellow.", "Blue and yellow."],
    answer: 1,
  },
  {
    id: 3,
    question:
      "The Load Alleviation Function (LAF) accumulators are pressurized by which hydraulic systems?",
    options: ["Green and blue.", "Green and yellow.", "Blue and yellow."],
    answer: 1,
  },
  {
    id: 4,
    question:
      "The RAT pressurizes the Blue hydraulic system to approximately ______ psi.",
    options: ["1500", "2500", "3000", "3500"],
    answer: 1,
  },
  {
    id: 5,
    question:
      "How many pumps has the yellow system to provide pressure (not counting the PTU)?",
    options: ["1", "2", "3", "4"],
    answer: 2,
  },
  {
    id: 6,
    question: "The hand pump supplies yellow system pressure to the:",
    options: [
      "Normal brakes.",
      "Alternate brakes",
      "Passenger doors.",
      "Cargo doors.",
    ],
    answer: 3,
  },
  {
    id: 7,
    question:
      "It is possible to pressurize the green hydraulic system on the ground via the PTU when the parking brake is set.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 8,
    question:
      "The Eng Pump Fault light extinguishes when the engine pump switch is selected to off except for:",
    options: ["Reservoir low level.", "Pump low pressure.", "An overheat."],
    answer: 2,
  },
  {
    id: 9,
    question:
      "With the airplane on the ground and the blue electric pump switch in AUTO; the blue pump will be energized when:",
    options: [
      "One engine is running.",
      "The BLUE PUMP OVRD switch has been pressed.",
      "First two statements are correct.",
    ],
    answer: 2,
  },
  {
    id: 10,
    question: "The PTU Fault light illuminates when the:",
    options: [
      "PTU is inoperative.",
      "Green or yellow reservoir has low air pressure.",
      "PTU pump has overheated.",
    ],
    answer: 1,
  },
  {
    id: 11,
    question:
      "The PUMP identification number on the ECAM HYD page becomes amber when:",
    options: [
      "System pressure is below 1450 psi.",
      "N2 is below idle.",
      "The reservoir level is low.",
    ],
    answer: 1,
  },
  {
    id: 12,
    question:
      "The _____ hydraulic system provides power for gear extension/retraction.",
    options: ["Yellow.", "Blue", "Green"],
    answer: 2,
  },
  {
    id: 13,
    question:
      "As long as the landing gear lever is up a hydraulic safety valve closes to cut off the hydraulic supply to the gear when the airspeed is:",
    options: [
      "Greater than 260 KIAS.",
      "Greater than 230 KIAS.",
      "Less than 260 KIAS.",
      "Less than 230 KIAS",
    ],
    answer: 0,
  },
  {
    id: 14,
    question: "Autobraking is initiated by:",
    options: [
      "Strut compression.",
      "Reverser action.",
      "Ground spoiler extension command.",
    ],
    answer: 2,
  },
  {
    id: 15,
    question:
      "When using the alternate brake system on accumulator pressure only; the accumulator supplies:",
    options: [
      "Partial brakes.",
      "At least seven full brake applications.",
      "Alternate brakes with antiskid.",
    ],
    answer: 1,
  },
  {
    id: 16,
    question:
      "The maximum degrees of nosewheel steering available when using the handwheel is ______.",
    options: ["+/- 60", "+/- 75", "+/- 95", "+/- 105"],
    answer: 1,
  },
  {
    id: 17,
    question:
      "The green DECEL light on the Autobrake switch illuminates when the actual airplane deceleration corresponds to ______ % of the selected rate.",
    options: ["80", "95", "100", "110"],
    answer: 0,
  },
  {
    id: 18,
    question:
      "The brakes pressure indication on TRIPLE PRESSURE INDICATOR reads which system pressure?",
    options: ["Yellow", "Blue", "Green"],
    answer: 0,
  },
  {
    id: 19,
    question:
      "To extend the landing gear with the Gravity Extension Handcrank requires _______ turns of the handle.",
    options: ["3 counter-clockwise", "2 counter-clockwise", "3 clockwise"],
    answer: 2,
  },
  {
    id: 20,
    question:
      "The aircraft’s three hydraulic systems are normally pressurized by:",
    options: [
      "Two engine driven pumps and one electric pump.",
      "Two electric pumps and one PTU.",
      "Two electric pumps and one engine driven pump.",
      "Two electric pumps and two engine driven pumps.",
    ],
    answer: 0,
  },
  {
    id: 21,
    question:
      "When will the yellow system electric pump operate? (AC power is available).",
    options: [
      "During the second engine start.",
      "When the first engine MASTER switch is moved to the ON position.",
      "If any N2 RPM is less than 45%.",
      "When the yellow electric system ELEC PUMP push button is selected to ON or the ground crew activates a cargo door switch.",
    ],
    answer: 3,
  },
  {
    id: 22,
    question: "What are the major equipment losses with loss of Green system?",
    options: [
      "Speed Brakes.",
      "Nosewheel steering, Autobrakes *",
      "Alternate Brakes.",
      "The upper and lower rudders.",
    ],
    answer: 1,
  },
  {
    id: 23,
    question: "The hydraulic PTU will activate if:",
    options: [
      "A significant pressure loss occurs in any of the three hydraulic systems.",
      "A significant pressure loss occurs in the green or yellow hydraulic system.",
      "Both are correct.",
    ],
    answer: 1,
  },
  {
    id: 24,
    question:
      "After extending the RAT, is it possible to check its position and status?",
    options: [
      "Check to see if the blue system ELEC PUMP FAULT light is not illuminated.",
      "Yes, select the ECAM ELEC page.",
      "Yes, select the ECAM HYD page.",
      "No. It is not possible.",
    ],
    answer: 2,
  },
  {
    id: 25,
    question: "The RAT is capable of powering a pump which will pressurize:",
    options: [
      "Only the blue system.",
      "All systems.",
      "The blue and yellow system.",
      "The blue and green system.",
    ],
    answer: 0,
  },
  {
    id: 26,
    question: "How is the yellow hydraulic system pressurized?",
    options: [
      "An engine driven pump, an electric pump, the PTU using the green system and, for the cargo doors only, a hand pump.",
      "An engine driven pump, electric pump, the PTU using the blue system and, for the cargo doors only, a hand pump.",
      "An engine driven pump, an electric pump, and the PTU using the green system.",
    ],
    answer: 0,
  },
  {
    id: 27,
    question:
      "When will normal operation of the BLUE system hydraulic pump begin?",
    options: [
      "During the first engine start.",
      "When the first engine MASTER switch is moved to the ON position.",
      "Only when the RAT is deployed.",
      "After both engines are started.",
    ],
    answer: 0,
  },
  {
    id: 28,
    question:
      "The PTU comes into action automatically when the differential pressure between the GREEN and the YELLOW systems is greater than ______ psi.",
    options: ["300.", "500.", "650.", "700."],
    answer: 1,
  },
  {
    id: 29,
    question:
      "When will the yellow system electric pump operate? (AC power is available)",
    options: [
      "During the second engine start.",
      "When the yellow electric system ELEC PUMP push button is selected to ON or the ground crew activates a cargo door switch.",
      "If any N2 RPM is less than 45%.",
      "When the first engine MASTER switch is moved to the ON position.",
    ],
    answer: 1,
  },
  {
    id: 30,
    question: "What is the normal pressure in the hydraulic system?",
    options: ["500 psi.", "1,000 psi.", "3,000 psi.", "2,000 psi"],
    answer: 2,
  },
  {
    id: 31,
    question:
      "You are at the gate. You have started engine #2. Before starting engine #1, you notice that the PTU test has not been activated. Is it normal?",
    options: [
      "No. You have to call the mechanics.",
      "The PTU has been shutoff",
      "The PTU will not work until the second engine has been started.",
    ],
    answer: 2,
  },
  {
    id: 32,
    question:
      "You get a G RSVR OVHT message. Why does the ECAM procedure ask you to switch the PTU off first?",
    options: [
      "To prevent the hot hydraulic fluid from being transferred to the YELLOW system.",
      "To depressurize the YELLOW and GREEN systems.",
      "To prevent the BLUE system from pressurizing the GREEN system.",
      "To prevent the PTU from pressurizing the GREEN system.",
    ],
    answer: 3,
  },
  {
    id: 33,
    question: "For hydraulic system malfunctions, when will the RAT deploy?",
    options: [
      "Automatically with the failure of both the green and blue hydraulic systems.",
      "Automatically with the failure of both the green and yellow hydraulic systems.",
      "Only when the guarded RAT MAN ON push button is selected by the crew.",
      "When airspeed drops below 100 knots with the gear up.",
    ],
    answer: 2,
  },
  {
    id: 34,
    question: "What does the RAT MAN ON switch do?",
    options: [
      "Extends RAT, pressurizes BLUE system, starts Emergency Generator.",
      "Extends RAT, must push RAT MAN ON again to pressurize BLUE system.",
      "Extends RAT, pressurizes GREEN system, starts Emergency Generator.",
      "Extends RAT, pressurizes BLUE system, does not start Emergency Generator.",
    ],
    answer: 3,
  },
  {
    id: 35,
    question:
      "Describe the PTU status with a green system reservoir overheat, low pressure or low fluid level.",
    options: [
      "The PTU will be inhibited",
      "The crew must select the PTU ON.",
      "The PTU fault light will remain illuminated as long as the problem exists. The PTU should be selected OFF.",
      "The crew must select the PTU OFF then ON",
    ],
    answer: 2,
  },
  {
    id: 36,
    question:
      "During engine start up, when is the BLUE hydraulic system pressurized?",
    options: [
      "As soon as the PTU is turned on.",
      "As soon as the BLUE electric pump is manually turned on.",
      "Automatically after first engine start.",
      "As soon as the engine master switch is set to IGN/START",
    ],
    answer: 2,
  },
  {
    id: 37,
    question: "If you lost the GREEN system, what equipment is lost?",
    options: [
      "Reverser 1 and gear retraction.",
      "Reverser 1, gear retraction and nose wheel steering *",
      "Reverser 2, gear retraction, cargo doors and nose wheel steering.",
      "Reverser 2 and gear retraction.",
    ],
    answer: 1,
  },
  {
    id: 38,
    question:
      "Crew members can use a hand pump to pressurize the YELLOW system in order to operate the cargo doors when no electrical power is available.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 39,
    question: "If you lost the YELLOW system, what equipment is lost?",
    options: [
      "Reverser 2",
      "Parking brake accumulator recharging",
      "Cargo door.",
      "All of the above.",
    ],
    answer: 3,
  },
  {
    id: 40,
    question:
      "On the hydraulic quantity indicator what does the amber level indicate?",
    options: [
      "The warning level.",
      "The reservoir contents",
      "The normal filling level",
      "The temperature of the hydraulic fluid.",
    ],
    answer: 0,
  },
  {
    id: 41,
    question: "What does a PTU FAULT light indicate?",
    options: [
      "GREEN or YELLOW reservoir overheat.",
      "GREEN or YELLOW reservoir low air pressure.",
      "GREEN or YELLOW reservoir low level.",
      "All of the above.",
    ],
    answer: 3,
  },
  {
    id: 42,
    question: "If you lost the BLUE system, what equipment is lost?",
    options: [
      "The Emergency generator.",
      "Cargo door",
      "Nose wheel steering.",
      "All of the above.",
    ],
    answer: 0,
  },
  {
    id: 43,
    question: "All hydraulic systems have a fire shutoff valve.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 44,
    question:
      "What is the signification of an amber RAT indicator (ECAM HYD page)?",
    options: [
      "The RAT is incorrectly stowed.",
      "The RAT is not stowed.",
      "Pressure for stowing the RAT has been applied, or the RAT pump is not available.",
    ],
    answer: 2,
  },
  {
    id: 45,
    question: "How can the pilot switch off the Fire Shut Off Valves?",
    options: [
      "By de-pressing the Hydraulic Shut Off Switches.",
      "By selecting the Hydraulic Valve Switch to the “Closed” position",
      "By de-pressing the Engine Fire Switches",
    ],
    answer: 2,
  },
  {
    id: 46,
    question:
      "If the Landing Gear was gravity extended using the hand crank on the center pedestal, what other systems will be inoperative?",
    options: [
      "Nose wheel steering and auto braking",
      "Nose wheel steering only.",
      "Anti-skid and auto braking.",
      "Nose wheel steering and anti-skid.",
    ],
    answer: 1,
  },
  {
    id: 47,
    question:
      "On ground and no engine running with blue pump Auto and electrical power available, when would the blue pump run?",
    options: [
      "Automatically",
      "When the blue Pump OVRD push button is pressed",
      "When the yellow electric pump is energized and PTU is Auto",
    ],
    answer: 1,
  },
  {
    id: 48,
    question:
      "What happens if the yellow hydraulic system pressure drops below 1,800 PSI (120 Bar)?",
    options: [
      "The priority valve closes to isolate pressure to the primary flight controls in order to keep the flaps supplied",
      "The priority valve opens to supply only the primary flight controls",
      "Ensures pressure for the essential users",
    ],
    answer: 2,
  },
  {
    id: 49,
    question:
      "What happens if the filter in the Hydraulic servicing circuit, is clogged?",
    options: [
      "The fluid bypasses the filter element.",
      "The fluid is stopped, filling is impossible.",
      "The depressurizing valve opens and filling continues.",
    ],
    answer: 1,
  },
  {
    id: 50,
    question:
      "What happens if you press the leak measurement valve P/B on the maintenance panel?",
    options: [
      "You cut the hydraulic pressure to the L/G.",
      "You cut the hydraulic pressure to the reverser.",
      "You cut the hydraulic pressure to the F/CL.",
    ],
    answer: 2,
  },
  {
    id: 51,
    question: "Where causes the system pressure number on the ECAM turn amber?",
    options: [
      "On the Cockpit hydraulic panel, the ECAM SD HYD page and at the reservoir quantity indicator.",
      "On the Cockpit Hydraulic Panel, the ECAM SD HYD page and at the Hydraulic service panel.",
      "On the ECAM SD HYD page, the reservoir quantity indicator and at the hydraulic service panel.",
    ],
    answer: 2,
  },
  {
    id: 52,
    question: "How can the Yellow electric Pump be switched on?",
    options: [
      "Only by selecting yellow Elec Pump push button on the hydraulic control panel to ON.",
      "By selecting Pump OVRD push button on the maintenance panel to OVRD.",
      "By selecting yellow ELEC PUMP on hydraulic control panel to ON or operating the cargo door manual selector valve.",
    ],
    answer: 2,
  },
  {
    id: 53,
    question: "What causes the system pressure number on the ECAM turn amber?",
    options: [
      "In hydraulic system pressure upstream on the leak measurement valve is low.",
      "If hydraulic system pressure downstream of the leak measurement valve is low.",
      "If hydraulic pressure provided by the Engine driven pump is normal.",
    ],
    answer: 0,
  },
];

//APU //
///******CHECKED*/
export const qData12 = [
  {
    id: 1,
    question: "To start the APU the:",
    options: [
      "BAT 1 and 2 push buttons must be selected to ON",
      "BAT 1 and 2 push buttons do not need to be selected ON if external power is available.",
      "Both are correct.",
    ],
    answer: 0,
  },
  {
    id: 2,
    question:
      "The Electronic Control Box (ECB) is primarily a full authority digital electronic controller that performs the APU system logic for all modes of APU operation such as:",
    options: [
      "Sequence and monitoring of start.",
      "Speed and temperature monitoring.",
      "Monitoring of bleed air and shut down.",
      "All of the above.",
    ],
    answer: 3,
  },
  {
    id: 3,
    question:
      "When the APU Master Switch is released, a normal APU shutdown occurs:",
    options: [
      "Without delay in all cases.",
      "With a delay, in all cases.",
      "With a delay if the bleed air was in use.",
    ],
    answer: 2,
  },
  {
    id: 4,
    question: "When selected on, the APU START push button, will:",
    options: [
      "Connect the APU generator to the aircraft electrical system.",
      "Start the APU if the APU MASTER SW was previously selected ON.",
      "Open the air intake flap and supply fuel pressure.",
    ],
    answer: 1,
  },
  {
    id: 5,
    question:
      "The APU has an integral independent lubrication system for lubrication and cooling.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 6,
    question: "The ECB (Electronic Control Box) controls the fuel flow.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 7,
    question: "When the APU MASTER SW is selected ON:",
    options: [
      "The APU computer automatically completes a self-test, opens the air intake flap and supplies fuel pressure.",
      "The APU computer automatically starts the APU.",
      "Connects the APU generator to the aircraft electrical system.",
      "The APU door opens.",
    ],
    answer: 0,
  },
  {
    id: 8,
    question: "The APU MASTER SW FAULT light will illuminate:",
    options: [
      "When APU low oil pressure is detected.",
      "When an automatic shutdown of the APU occurs.",
      "For an APU overheat or APU fire.",
      "If the batteries are selected OFF while the APU is operating.",
    ],
    answer: 1,
  },
  {
    id: 9,
    question:
      "Will the APU bleed valve close automatically during climb? Will it reopen during descent?",
    options: ["Yes", "No"],
    answer: 1,
  },
  {
    id: 10,
    question: "The APU system page will appear on the ECAM:",
    options: [
      "When selected by the crew.",
      "Automatically whenever the APU is started and AC power is available.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 11,
    question:
      "If APU bleed was used, after a manual shut down sequence, the APU:",
    options: [
      "Stops immediately",
      "Keeps running for 4 minutes",
      "Keeps running for 2 minutes *",
      "Keeps running for 60 seconds",
    ],
    answer: 3,
  },
  {
    id: 12,
    question:
      "With the engines off, if the AVAIL light is illuminated on both the APU START push button and the EXT PWR push button, what is the source of electrical power for the aircraft busses?",
    options: [
      "It is not possible to determine without checking the ECAM.",
      "The aircraft batteries",
      "The APU.",
      "External power",
    ],
    answer: 2,
  },
  {
    id: 13,
    question:
      "BAT 1 and 2 push buttons do not need to be selected ON if external power is available.",
    options: [
      "It is normally left in the lights out position.",
      "When selected OFF, the APU generator is de-energized.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 14,
    question:
      "What is the maximum altitude at which the APU may be started using the batteries only?",
    options: ["15,000 ft", "20,000 ft", "25,000 ft", "39,000 ft"],
    answer: 2,
  },
  {
    id: 15,
    question: "When the APU is running, the APU fuel pump:",
    options: [
      "Runs when tank pumps pressure is not sufficient.",
      "Runs all time",
      "Runs only in flight.",
      "Runs when the APU fuel pump is selected on.",
    ],
    answer: 0,
  },
  {
    id: 16,
    question:
      "With nobody in the cockpit, if you have an APU FIRE, which statement is correct?",
    options: [
      "On the ground, an APU EMER shut down will occur and the APU fire bottle will be discharged automatically.",
      "On the ground, you have to perform the ECAM actions to shut down the APU and extinguish the fire from the cockpit.",
      "On the ground an APU AUTO shut down will occur but you have to discharge the APU fire bottle manually.",
      "In the air, an APU EMER shut down will occur and the APU fire bottle will be discharged automatically.",
    ],
    answer: 0,
  },
  {
    id: 17,
    question:
      "The basic element of the APU is a single shaft gas turbine which delivers ______ power for driving the accessory gearbox (electrical generator) and produces bleed air (engine starting and pneumatic supply)",
    options: [
      "2nd stage compressor",
      "3rd stage turbine",
      "2nd stage turbine.",
      "Mechanical shaft",
    ],
    answer: 3,
  },
  {
    id: 18,
    question:
      "Fire on ground or in flight will cause the APU MASTER SW pushbutton FAULT light to come on.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 19,
    question: "With battery power, what would an APU fire test look like?",
    options: [
      "APU FIRE pushbutton illuminated.",
      "SQUIB and DISCH lights illuminated",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 20,
    question:
      "The starter engages if the air intake is closed and the MASTER SW and the START pushbuttons are ON.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 21,
    question:
      "A FLAP OPEN indication is displayed in amber when the APU air inlet flaps is fully open",
    options: ["True", "False"],
    answer: 1,
  },
  {
    id: 22,
    question: "The APU may obtain power for starting from:",
    options: [
      "Ground services.",
      "Normal aircraft supply.",
      "The aircraft’s batteries or in combination with the external power.",
      "All of the above.",
    ],
    answer: 3,
  },
  {
    id: 23,
    question: "The APU cannot be shut down from outside the aircraft.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 24,
    question: "What are some of the causes for an APU automatic shutdown?",
    options: [
      "Fire (on ground only), EGT overtemperature, No acceleration, low oil pressure.",
      "Fire (on ground only), EGT overtemperature, Underspeed, Overspeed, low oil pressure, high oil pressure",
      "Fire (on ground only), EGT overtemperature, Reverse flow, Overspeed, low oil pressure, high oil pressure",
      "Fire (on ground only), underspeed, overspeed, EGT overtemperature, Reverse flow, Low oil pressure, DC power loss.",
    ],
    answer: 3,
  },
  {
    id: 25,
    question: "Maximum altitude for APU bleed operation is:",
    options: ["15,000 ft", "18,000 ft", "20,000 ft", "22,000 ft"],
    answer: 2,
  },
  {
    id: 26,
    question: "Can the APU FIRE test be performed with the APU running?",
    options: ["Yes", "No"],
    answer: 0,
  },
  {
    id: 27,
    question: "The APU is supplied from the:",
    options: [
      "Left fuel feed line.",
      "Right fuel feed line.",
      "Left or right fuel line",
    ],
    answer: 0,
  },
  {
    id: 28,
    question: "Can the APU be used with wing anti-ice on?",
    options: [
      "No.",
      "Yes, but only for electrical power. The APU bleed valve should not be opened while using wing anti-ice.",
      "Yes, except during approach and go-around.",
      "Yes, but the altitude of utilization is limited to 15,000 ft.",
    ],
    answer: 1,
  },
  {
    id: 29,
    question:
      "On ground, can you start the APU using the aircraft batteries only?",
    options: ["Yes", "No"],
    answer: 0,
  },
  {
    id: 30,
    question:
      "When starting the APU, the FUEL LO PR indication appears amber when an APU fuel low pressure is detected.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 31,
    question:
      "The LOW OIL LEVEL advisory pulses in ____ if the APU oil quantity approaches its minimum value.",
    options: ["Amber", "White", "Red", "Green"],
    answer: 3,
  },
  {
    id: 32,
    question:
      "If an APU start is initiated on battery power only, is fire protection available?",
    options: ["Yes", "No"],
    answer: 0,
  },
  {
    id: 33,
    question: "With battery power only, what would an APU fire test look like?",
    options: [
      "APU FIRE pb illuminated and SQUIB + DISCH lights illuminated",
      "APU FIRE pb illuminated",
      "SQUIB + DISCH lights illuminated",
    ],
    answer: 0,
  },
  {
    id: 34,
    question: "What is the maximum operating altitude of the APU?",
    options: ["25,000 feet", "30,000 feet", "35,000 feet", "39,000 feet"],
    answer: 3,
  },
  {
    id: 35,
    question: "How many APU fire extinguisher bottles are installed?",
    options: ["One", "Two", "One AC operated and one DC operated"],
    answer: 0,
  },
];

//OXYGEN //
///******CHECKED*/
export const qData13 = [
  {
    id: 1,
    question:
      "On which ECAM page could the flight crew check the exact pressure of the oxygen cylinder?",
    options: [
      "The PRESS page.",
      "The DOORS page.",
      "The COND page.",
      "The STATUS page.",
    ],
    answer: 1,
  },
  {
    id: 2,
    question:
      "What is indicated by a missing green thermal plug during an exterior preflight?",
    options: [
      "An oxygen system overpressure or thermal discharge.",
      "This is normal indication, the green thermal plug only appears if the oxygen cylinder is low.",
      "The crew oxygen bottle is empty.",
      "An external fire discharge has been activated.",
    ],
    answer: 0,
  },
  {
    id: 3,
    question:
      "Approximately how long are the passenger oxygen generators able to produce oxygen?",
    options: ["15 minutes.", "20 minutes.", "25 minutes.", "30 minutes."],
    answer: 0,
  },
  {
    id: 4,
    question:
      "What is the main difference between the crew and the passenger oxygen system?",
    options: [
      "There is no difference: both are served by oxygen cylinders.",
      "Crew is supplied from an oxygen cylinder; passengers are supplied by chemical oxygen generators.",
      "Both the crew and passengers are supplied with oxygen from chemical oxygen generators.",
      "The crew has an oxygen bottle for an emergency back-up supply.",
    ],
    answer: 1,
  },
  {
    id: 5,
    question: "What is the purpose of the CREW SUPPLY push button?",
    options: [
      "When selected to ON, it supplies oxygen to the Captain & F/O only (jumpseats are not supplied)",
      "When selected to ON, it allows the flow of low pressure oxygen to the crew’s masks.",
      "In case of low cylinder pressure it allows the crew to tap into the passenger oxygen system.",
    ],
    answer: 1,
  },
  {
    id: 6,
    question:
      "What happens when the mask is used with the selection at 100% position?",
    options: [
      "Mask is supplied with diluted oxygen on demand.",
      "Mask is supplied with undiluted oxygen on demand.",
      "Mask is supplied with undiluted oxygen continuous flow.",
      "Mask is supplied with diluted oxygen on demand.",
    ],
    answer: 1,
  },
  {
    id: 7,
    question:
      "At approximately what cabin altitude should the passenger oxygen masks drop?",
    options: [
      "10,000 feet (+100, - 500 ft)",
      "12,500 feet (+ or - 500 ft)",
      "14,000 feet (+0, - 500 ft)",
      "15,000 feet.",
    ],
    answer: 2,
  },
  {
    id: 8,
    question: "What does an amber OXY on the ECAM Doors mean?",
    options: [
      "The crew supply switch is turned off and/or oxygen pressure is less than 400 psi",
      "The crew supply switch is turned off",
      "Oxygen pressure is less than 650 psi.",
      "Oxygen pressure is less than 300 psi.",
    ],
    answer: 0,
  },
  {
    id: 9,
    question: "Illumination of the SYS ON light is an indication that:",
    options: [
      "The crew must depress the MASK MAN ON pb in order to deploy the masks.",
      "Electrical power has been sent to deploy the masks, either manually or automatically.",
      "The crew oxygen cylinder is empty.",
      "All of the passenger masks have deployed.",
    ],
    answer: 1,
  },
  {
    id: 10,
    question: "There are oxygen generators in each aircraft’s galley.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 11,
    question: "What will depressing the guarded MASK MAN ON pb accomplish?",
    options: [
      "A signal is sent to the chemical oxygen generators to start the flow of oxygen to the masks.",
      "It manually sends a signal to open the oxygen mask doors.",
      "Both are correct.",
    ],
    answer: 1,
  },
  {
    id: 12,
    question: "When does passenger oxygen flow start?",
    options: [
      "When the mask is pulled toward the seat.",
      "When the oxygen doors open.",
      "When the oxygen button is pushed.",
      "When cabin altitude exceeds 14,000 ft.",
    ],
    answer: 0,
  },
];

//EQUIPMENT //
///******CHECKED*/
export const qData14 = [
  {
    id: 1,
    question:
      "You want to open the cabin door, whilst lifting the control handle the white light illuminates. What does it mean?",
    options: [
      "There is residual pressure in the cabin.",
      "The ramp is not correctly positioned.",
      "The slide is still armed.",
      "Somebody is trying to open the door from outside.",
    ],
    answer: 2,
  },
  {
    id: 2,
    question:
      "Which situation will automatically illuminate the escape path lighting?",
    options: [
      "The loss of power to the DC ESS SHED bus and The loss of power to the AC bus #1",
      "The loss of power to the AC ESS SHED bus and The loss of power to the AC bus #1",
      "The loss of power to the AC ESS SHED and the loss of power to the DC ESS SHED",
      "The loss of power to the AC ESS SHED",
    ],
    answer: 0,
  },
  {
    id: 3,
    question:
      "When the door arming lever is in the ARMED position, opening the door from the outside will:",
    options: [
      "Automatically deploy and inflate the evacuation slide.",
      "Disarm the door.",
      "The power assist will rapidly open the door.",
    ],
    answer: 1,
  },
  {
    id: 4,
    question: "Opening an emergency overwing exit will:",
    options: [
      "Inflate the slide at the leading edge of the wing.",
      "Automatically inflate the double lane slide off the trailing edge of the wing.",
      "Only arm the overwing slide.",
    ],
    answer: 1,
  },
  {
    id: 5,
    question:
      "Although no busses are unpowered, illumination of emergency exit lights in the cabin is desired. Which of the following answers are correct?",
    options: [
      "The emergency lights, exit signs and the floor paths markings will illuminate if the guarded EMER EXIT LT pb on the flight attendant CIDS panel is selected ON.",
      "The emergency lights, exit signs and the escape path markings will illuminate if the cockpit EMER EXIT LT switch is ON.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 6,
    question:
      "The PBE provides a breathable atmosphere for approximately ______ minutes.",
    options: ["10", "15", "16", "18"],
    answer: 1,
  },
  {
    id: 7,
    question: "How is crew oxygen provided?",
    options: [
      "From a single bottle.",
      "There is one bottle per crew member except for jumpseaters",
      "Oxygen generator.",
      "One oxygen bottle with an oxygen generator.",
    ],
    answer: 0,
  },
  {
    id: 8,
    question:
      "What are the indications that the PBE oxygen supply has depleted?",
    options: [
      "The hood collapses to the point that it touches your face or by a flashing red light in addition to the flashing green light.",
      "The sound of the oxygen flow stops and flashing red and green lights appear.",
      "No 02 supply indications, & lights only indicate time.",
      "All of the above.",
    ],
    answer: 0,
  },
  {
    id: 9,
    question:
      "What cockpit lighting is available during an Emergency Electrical Configuration (EEC)?",
    options: [
      "All lights are fully functional.",
      "Dome lights, main panel flood lights, and the standby compass light.",
      "Dome light (right side only), main panel flood lights, and the standby compass light.",
      "Dome light (right side only), main panel flood lights (left two columns only), and the standby compass light.",
    ],
    answer: 3,
  },
  {
    id: 10,
    question:
      "On the cockpit overhead panel there is a three position EMERGENCY EXIT LT switch. What lights are associated with this switch?",
    options: [
      "Exit signs, emergency lights, and floor path lights.",
      "Exit signs, emergency lights, main panel flood lights, and floor path lights.",
      "Exit signs, emergency lights, dome lights, main panel flood lights, and the standby compass light.",
      "Exit signs, and the standby compass light.",
    ],
    answer: 0,
  },
  {
    id: 11,
    question:
      "There is no other way of deploying the overwing escape slide if it fails to deploy automatically on opening the emergency exit.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 12,
    question: "The HALON fire extinguisher should be used on what type fires?",
    options: [
      "Electrical fires only.",
      "Electrical and burning metals.",
      "Electrical and flammable liquid fires",
      "Electrical and ordinary combustibles.",
    ],
    answer: 2,
  },
  {
    id: 13,
    question:
      "A cargo container is locked in place. How is its associated PDU (Power Drive Unit) controlled?",
    options: [
      "De-energized by its associated container latch proximity switch",
      "Continuously powered",
      "Selected 'off' by the power switch",
    ],
    answer: 0,
  },
  {
    id: 14,
    question:
      "Where are the A320 emergency escape slide inflation bottles located?",
    options: [
      "Above each emergency exit door",
      "In the forward side walls of the Aft cargo compartment",
      "In the forward cargo compartment for the forward cabin emergency doors and in the rear cargo compartment for the rear doors",
    ],
    answer: 1,
  },
  {
    id: 15,
    question:
      "How is the position of Captain and First Officer seats retractable in case of electrical network failure?",
    options: [
      "By a battery-driven DC motor",
      "Manually",
      "By a pneumatic motor",
    ],
    answer: 1,
  },
];

//ENGINES part 1 ()//
///******CHECKED*/
export const qData15 = [
  {
    id: 1,
    question:
      "The Full Authority Digital Engine Control (FADEC) controls which of the following functions:",
    options: [
      "Fuel metering",
      "Engine limits",
      "Automatic and manual starting.",
      "All of the above.",
    ],
    answer: 3,
  },
  {
    id: 2,
    question: "The FADEC is normally powered by:",
    options: [
      "The RAT",
      "Its own magnetic alternator",
      "The normal aircraft electrical system",
    ],
    answer: 1,
  },
  {
    id: 3,
    question:
      "During an automatic start sequence; selecting the ENG MASTER switch to on:",
    options: [
      "Closes the pack valves.",
      "Initiates the start sequence.",
      "Displays the ECAM engine page *",
      "First two statements are correct",
    ],
    answer: 3,
  },
  {
    id: 4,
    question:
      "The FADEC has control during a manual engine start sequence except for:",
    options: [
      "The high pressure fuel valve.",
      "The start valve.",
      "An automatic abort.",
    ],
    answer: 2,
  },
  {
    id: 5,
    question:
      "The A/THR is armed on the ground provided at least one FD is on by:",
    options: [
      "Setting the throttles to TO/GA.",
      "Automatically at engine start.",
      "With engines running; pressing the A/THR p/b manually.",
    ],
    answer: 0,
  },
  {
    id: 6,
    question:
      "Continuous ignition is automatically provided during the following:",
    options: [
      "Flex or TO/GA thrust is selected on the ground.",
      "ENG ANTI ICE switch is ON",
      "Engine surge on stall occurs in flight.",
      "Any of the above *",
    ],
    answer: 3,
  },
  {
    id: 7,
    question:
      "If a throttle is set between two detents; the FADEC selects the rating limit:",
    options: [
      "Determined by the throttle position.",
      "Corresponding to the higher mode.",
      "Corresponding to the lower mode.",
    ],
    answer: 1,
  },
  {
    id: 8,
    question: "When the A/THR system is in use:",
    options: [
      "The throttles move automatically according to FADEC commands.",
      "The throttles can only be moved manually.",
      "The throttles will move when the A/THR p/b is used.",
    ],
    answer: 1,
  },
  {
    id: 9,
    question:
      "A/THR engagement is confirmed when “A/THR” is displayed in ______ in the right column of the FMA.",
    options: ["Green", "Blue", "White"],
    answer: 2,
  },
  {
    id: 10,
    question:
      "If an A/THR disconnect switch is pushed and held for more than _______ seconds; the A/THR system is disconnected for the remainder of the flight; including the _______.",
    options: [
      "10 Seconds - Alpha floor Protection",
      "12 Seconds - Alpha floor Protection",
      "15 Seconds - Alpha floor Protection",
      "18 Seconds - Alpha floor Protection",
    ],
    answer: 2,
  },
  {
    id: 11,
    question: "Takeoff can be performed using which power settings?",
    options: [
      "Any manual setting.",
      "FLEX and MCT.",
      "CLIMB and TO/GA",
      "FLEX/MCT and TO/GA.",
    ],
    answer: 3,
  },
  {
    id: 12,
    question: "When is T.O. INHIBIT and LDG INHIBIT active?",
    options: [
      "TO 750 feet AGL, LND below 1500 feet AGL.",
      "TO 1000 feet AGL, LND below 1000 feet AGL.",
      "TO 1500 feet AGL, LND below 750 feet AGL.",
      "TO 1500 feet AGL, LND below 1000 feet AGL.",
    ],
    answer: 2,
  },
  {
    id: 13,
    question:
      "How many thrust lever positions are there, and how are they labeled?",
    options: [
      "There are 6 thrust levers positions: TO/GA, MCT, FLEX, CL, IDLE and REV IDLE.",
      "There are 6 thrust levers positions: TO/GA, FLX/MCT, CL, IDLE, REV IDLE and MREV.",
      "There are 4 thrust levers positions: TO/GA, FLX/MCT, CL, IDLE.",
      "There are 5 thrust levers positions: TO/GA, FLX/MCT, CL, IDLE and REV IDLE.",
    ],
    answer: 1,
  },
  {
    id: 14,
    question:
      "You are just about to take off. You have not inserted a FLEX temperature. Can you still takeoff?",
    options: [
      "Yes, by setting the thrust levers to the CLIMB detent.",
      "Yes, by setting the thrust levers to the FLEX/MCT detent.",
      "Yes, but only using the TO/GA detent.",
      "Not until a FLEX temperature is inserted.",
    ],
    answer: 2,
  },
  {
    id: 15,
    question:
      "During an engine start sequence, the gray background on N2 disappears at about 57%. What does this indicate?",
    options: [
      "That the igniters are no longer being powered.",
      "That the start sequence has finished and all engine parameters have stabilized.",
      "That the start valve air pressure has dropped.",
      "That there is a start fault and a dry crank is in progress.",
    ],
    answer: 1,
  },
  {
    id: 16,
    question: "What does the FLEX represent in the FLX/MCT detent?",
    options: [
      "This is a reduced thrust setting used for takeoff.",
      "This is the maximum continuous thrust setting for single-engine operations.",
      "This is the thrust setting that should be chosen in the case of a single-engine go-around.",
      "This is a derated thrust according the ground temperature of the day.",
    ],
    answer: 0,
  },
  {
    id: 17,
    question: "How many FADEC’s are installed in the aircraft?",
    options: [
      "Two, one per engine.",
      "One, with two Engine Control Units (ECU).",
      "Two per engine.",
      "Two, one is the active FADEC and the other is a standby.",
    ],
    answer: 0,
  },
  {
    id: 18,
    question:
      "What is required for the FADEC to compute a reduced thrust setting?",
    options: [
      "A FLEX temperature must be entered on the INIT page of the MCDU.",
      "Nothing, it is an automatic function of the FADEC.",
      "A FLEX temperature must be entered on the TAKE OFF PERF page of the MCDU.",
    ],
    answer: 2,
  },
  {
    id: 19,
    question:
      "Using manual thrust, the thrust lever position will determine the thrust setting for the engine.",
    options: [
      "True. They will operate like conventional throttles.",
      "True, but care must be taken not to overspeed the engines.",
      "False, the next higher detent will be the thrust limit.",
    ],
    answer: 0,
  },
  {
    id: 20,
    question: "What is considered to be the active range of the A/THR system?",
    options: [
      "During single engine operations from just above the IDLE stop to the FLX/MCT detent.",
      "During two engine operations from just above the IDLE stop to the CL detent.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 21,
    question:
      "If the thrust levers are set in the idle detent, is Alpha floor protection still available?",
    options: [
      "Yes. Thrust lever position is disregarded.",
      "Yes, as long as “A/THR” appears in Column five.",
      "No, because the IDLE detent is out of the A/THR active range.",
    ],
    answer: 0,
  },
  {
    id: 22,
    question:
      "Is there any mechanical linkage between the thrust levers and the engines?",
    options: [
      "There is a fiber optic backup.",
      "There is a mechanical linkage in case the ECU fails.",
      "No, it is electrically powered and hydraulically actuated.",
      "No, it is totally electrical.",
    ],
    answer: 3,
  },
  {
    id: 23,
    question: "What is Alpha floor protection?",
    options: [
      "It helps prevent the aircraft from stalling and protects against windshear encounters during takeoff and approach.",
      "It is a function of the flight control laws to prevent the aircraft from stalling.",
      "It helps prevent the aircraft from stalling by limiting the angle of bank at low airspeeds.",
      "It helps prevent the aircraft from stalling by limiting the angle of climb at high airspeeds.",
    ],
    answer: 0,
  },
  {
    id: 24,
    question: "Alpha floor protection is available:",
    options: [
      "From lift off and down to 100 feet radio altitude in the landing configuration.",
      "From lift off and down to 50 feet radio altitude in the landing configuration.",
      "From lift off and down to 500 feet radio altitude in the landing configuration.",
      "From lift off and down to 750 feet radio altitude in the landing configuration.",
    ],
    answer: 0,
  },
  {
    id: 25,
    question: "How do you arm the A/THR in flight?",
    options: [
      "A/THR switch ON when throttles are in the engagement mode.",
      "A/THR switch ON when throttles are not in the engagement mode.",
    ],
    answer: 1,
  },
  {
    id: 26,
    question:
      "What is the difference between variable thrust and the speed mode?",
    options: [
      "In the fixed thrust mode, thrust is fixed and the elevator controls the speed.",
      "In the variable thrust mode, thrust is fixed and speed is controlled by the elevator.",
      "In the fixed thrust mode, thrust is variable and speed is controlled by the elevator.",
    ],
    answer: 0,
  },
  {
    id: 27,
    question: "The left column, first line of the FMA is used to indicate:",
    options: [
      "If A/THR is off, armed, or active.",
      "The mode of the A/THR in use when A/THR is armed or active.",
      "Amber caution messages.",
      "The thrust indication.",
    ],
    answer: 1,
  },
  {
    id: 28,
    question: "What are the two basic modes of the A/THR system?",
    options: [
      "Thrust and Mach.",
      "Thrust and speed",
      "Variable thrust and fixed speed *",
    ],
    answer: 2,
  },
  {
    id: 29,
    question: "Can the engines be overboosted in the TOGA position?",
    options: [
      "Yes, if the autothrust function is not active.",
      "No, because the ECU provides engine protection limit by monitoring N1, N2, and HMU fuel flow adjustments.",
      "No, because the EIU is responsible for monitoring N1 and N2.",
    ],
    answer: 1,
  },
  {
    id: 30,
    question: "During a manual start, how is the start valve opened?",
    options: [
      "It is automatic once the ENG MASTER is placed to the ON position.",
      "By depressing the ENG MAN START pushbutton’s on the overhead panel.",
      "By depressing the ENG MAN START pushbutton’s on the overhead panel while the ENG MODE selector is out of the NORM position.",
    ],
    answer: 2,
  },
  {
    id: 31,
    question:
      "Is any thrust lever action required if an engine failed at rotation while using FLEX takeoff power?",
    options: ["Yes.", "No."],
    answer: 0,
  },
  {
    id: 32,
    question: "When does oil quantity indication begin to pulse?",
    options: [
      "Decreasing below 5 qts.",
      "During engine start.",
      "Oil quantity detector or pressure fault.",
    ],
    answer: 0,
  },
];
//ENGINES part 2 ()//
///******CHECKED*/
export const qData16 = [
  {
    id: 33,
    question: "Does the FADEC provide EGT limit protection constantly?",
    options: [
      "Yes, in all phases of flight.",
      "No, EGT limit protection is only available during ground auto starts.",
      "No, EGT limit protection is only available during ground auto starts and single-engine operations.",
    ],
    answer: 1,
  },
  {
    id: 34,
    question:
      "Auto Thrust System: When are the throttles in the engagement range?",
    options: [
      "Both throttles are above idle but not above the CLB detent when both engines are running.",
      "A single throttle of an operating engine is above idle but not above the MCT detent when one engine is running.",
      "All of the above.",
    ],
    answer: 2,
  },
  {
    id: 35,
    question:
      "The idle setting on the aircraft is capable of modulating due to certain conditions. During descent, what might cause the IDLE N1 setting to increase?",
    options: [
      "The slats are extended.",
      "For a higher than normal bleed air demand or warmer than normal engine oil temp in flight.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 36,
    question: "Verification that Autothrust (A/THR) is active can be made by:",
    options: [
      "Watching the automatic movement of the thrust levers.",
      "Only when the thrust levers are set at TOGA.",
      "Only by looking at column five of the FMA.",
    ],
    answer: 0,
  },
  {
    id: 37,
    question:
      "When Alpha floor is activated, what power setting is automatically commanded and what FMA annunciation would appear in Column one?",
    options: ["TOGA / A. FLOOR", "CLB / CLB", "MCT / THR LK"],
    answer: 0,
  },
  {
    id: 38,
    question:
      "Holding the instinctive disconnect push button’s for more than fifteen seconds will:",
    options: [
      "Disengage the A/THR (including Alpha Floor) until below 1000 feet AGL for the remainder of the flight.",
      "Disengage the A/THR (including Alpha Floor) until below 500 feet AGL for the remainder of the flight.",
      "Disengage the A/THR (excluding Alpha Floor) for the remainder of the flight.",
      "Disengage the A/THR (including Alpha Floor) for the remainder of the flight.",
    ],
    answer: 3,
  },
  {
    id: 39,
    question:
      "During the automatic start sequence of ENG 2, you notice that only igniter B is powered. Is it normal?",
    options: [
      "Yes, igniter A is only used for engine anti-ice.",
      "No, normally both igniters are used for all engine starts.",
      "Yes, igniter B is always used for ENG 2 start.",
      "Yes, igniters are used alternately for engine start.",
    ],
    answer: 3,
  },
  {
    id: 40,
    question:
      "As far as FMA annunciations are concerned, what would indicate that the A/THR system is active?",
    options: [
      "“SPEED” appears in green in column one, line one.",
      "“A/THR” changes from blue to white as shown in column five, line three.",
      "“A/THR” changes from white to blue in column five, line one.",
    ],
    answer: 1,
  },
  {
    id: 41,
    question:
      "If a thrust lever is set between two detents, the FADEC selects the rating limit corresponding to the higher limit.",
    options: [
      "True. This limit is displayed on the upper ECAM.",
      "False. For safety reasons, it always selects the rating limit corresponding to the lower limit.",
    ],
    answer: 0,
  },
  {
    id: 42,
    question:
      "What would happen during the takeoff roll if the thrust levers were set to the FLX/MCT detent without FLEX temperature being entered?",
    options: [
      "Nothing, the thrust setting would be at FLEX since FADEC automatically calculates a reduced thrust setting.",
      "The thrust setting would be MCT and there would be no corresponding warnings.",
      "A LEVEL TWO warning would sound along with the appearance of an ECAM message.",
    ],
    answer: 2,
  },
  {
    id: 43,
    question:
      "What abnormals would cause the FADEC to automatically abort a start?",
    options: [
      "A hot start, an overtemp, a stalled start or no lightoff.",
      "An engine overspeed.",
      "A hot start, a stalled start, an overtemp or APU underspeed.",
      "A hot start, an overtemp or an engine overspeed.",
    ],
    answer: 0,
  },
  {
    id: 44,
    question:
      "During an in-flight start or a manual start, will the FADEC auto abort for an abnormal?",
    options: [
      "Yes. It will for an in-flight start (but not for a manual start).",
      "Yes.",
      "No.",
    ],
    answer: 2,
  },
  {
    id: 45,
    question:
      "For reverser actuation, the left engine uses ____ hydraulic system pressure and the right engine uses _____ hydraulic system pressure.",
    options: [
      "Green - Yellow.",
      "Yellow - Blue.",
      "Yellow - Green.",
      "Blue - Green.",
    ],
    answer: 0,
  },
  {
    id: 46,
    question:
      "While flying the airplane with A/THR active, the speed knob is pulled and turned to a selected speed that happens to be slower than Alpha prot. What speed will the airplane slow to?",
    options: [
      "VLS.",
      "Green Dot + 5 kts.",
      "Green dot.",
      "Green dot + 10 kts.",
    ],
    answer: 0,
  },
  {
    id: 47,
    question:
      "Where is the thrust reduction altitude found and is the number always the same?",
    options: [
      "Column four, row three of the FMA. It will always be 1500 ft. AGL.",
      "TAKE OFF PERF page of the MCDU (it can be modified).",
      "PROG page of the MCDU. It can be modified in order to meet constraints.",
      "TAKE OFF PERF page of the MCDU. It cannot be modified",
    ],
    answer: 1,
  },
  {
    id: 48,
    question: "During a manual start, what function does the FADEC perform?",
    options: [
      "Passive monitoring of the start sequence, to close the start valve and cut off the ignition on the ground.",
      "To control the start sequence and take corrective action in case of a failure or malfunction.",
      "The FADEC does not perform any function during a manual start and all actions have to be carried out by the pilots.",
    ],
    answer: 0,
  },
  {
    id: 49,
    question:
      "During normal operation, in what detent are the thrust levers positioned once the thrust reduction altitude has been reached?",
    options: ["CL", "MCT", "FLX", "CRZ"],
    answer: 0,
  },
  {
    id: 50,
    question: "After takeoff the A/THR will not become active until:",
    options: [
      "The thrust levers are placed in the CLIMB position.",
      "The thrust levers are moved out of the TO/GA or FLEX/MCT detents.",
      "The autopilot is engaged.",
    ],
    answer: 0,
  },
  {
    id: 51,
    question: "Continuous ignition is provided automatically when:",
    options: [
      "ENG ANTI ICE is selected ON and/or engine flameout is detected in flight.",
      "ENG ANTI ICE is selected ON.",
      "ENG ANTI ICE is selected ON and/or engine flameout is detected in flight and/or the EIU fails.",
    ],
    answer: 2,
  },
  {
    id: 52,
    question: "Is it possible to disconnect Alpha floor?",
    options: [
      "No, Alpha floor protection is always available.",
      "Yes, by placing the thrust levers to IDLE.",
      "Yes, by depressing the autothrottle push button on the FCU.",
    ],
    answer: 2,
  },
  {
    id: 53,
    question:
      "The FADEC will automatically abort an abnormal start thereby providing engine limit protection, but will the FADEC also automatically dry crank the engine?",
    options: [
      "No, that is why there is a CRANK selection on the ENG MODE selector.",
      "Yes, even if the crew interrupts the start by placing the ENG MASTER switch to OFF.",
      "Yes, as long as the ENG MASTER switch remains in the ON position.",
    ],
    answer: 2,
  },
  {
    id: 54,
    question: "What would happen in flight if the FADEC’s alternator failed?",
    options: [
      "Automatic control of the engine would be lost.",
      "The standby channel of the ECU would take over.",
      "The FADEC would now be powered using ship’s power.",
      "The FADEC would now be powered using ship’s battery power.",
    ],
    answer: 2,
  },
  {
    id: 55,
    question:
      "You are in the middle of a manual engine start. What are you looking for when you select ENG MASTER 2 ON?",
    options: [
      "The fuel used is reset, fuel flow is indicated and IGNITION message on the E/WD.",
      "The fuel flow is reset, an igniter is powered and fuel used is indicated.",
      "The fuel used is reset, both igniters are powered and fuel flow is indicated.",
      "The fuel used is reset, both igniters are powered and N2 is increasing.",
    ],
    answer: 2,
  },
  {
    id: 56,
    question:
      "Each FADEC is a dual channel (A&B) computer providing full engine management.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 57,
    question:
      "In addition to when the engine is operating, when else will the FADEC be powered?",
    options: [
      "When the FADEC GND PWR pb on the maintenance panel is depressed, or the ENG MASTER switch is placed to ON.",
      "When the FADEC control switch is placed to the IGN/START position.",
      "For five minutes after electrical power is applied to the aircraft, when the FADEC GND PWR pb on the maintenance panel is depressed, or when the ENG MODE control switch is placed to IGN/START position.",
      "As long as electrical power is established on the aircraft, the FADEC is powered.",
    ],
    answer: 2,
  },
  {
    id: 58,
    question: "During an automatic start, the FADEC controls:",
    options: [
      "The start valves, igniters and fuel flow.",
      "The start valves, igniters, HP and LP fuel valves.",
      "The igniters and fuel flow.",
      "The start valves, igniters, HP and LP fuel valves, and fuel flow.",
    ],
    answer: 3,
  },
  {
    id: 59,
    question: "How is manual arming of the A/THR system accomplished?",
    options: [
      "By pressing the A/THR pb on the FCU confirm the pushbutton illuminates green or confirm an A/THR annunciation is displayed in column 5 of the FMA.",
      "By placing the thrust levers into the active range.",
      "Advance at least one thrust lever to the TOGA or FLX/MCT detent with at least one Flight Director (FD) on.",
    ],
    answer: 0,
  },
  {
    id: 60,
    question:
      "You are at the start of a descent and a blue N1 arc is displayed showing the new thrust demand. When does this happen?",
    options: [
      "Whenever the thrust levers are moved out of the CLIMB position.",
      "Whenever there is a power change in manual thrust.",
      "Whenever there is a power change with the autopilot engaged.",
      "Whenever there is power change with auto thrust engaged.",
    ],
    answer: 3,
  },
  {
    id: 61,
    question:
      "A few seconds after selecting reverse, the amber REV indication changes to green. What does this mean?",
    options: [
      "The reversers have been re-stowed.",
      "The reversers are now fully deployed.",
      "The reverse thrust selection has been acknowledged.",
      "The reversers are unlocked.",
    ],
    answer: 1,
  },
  {
    id: 62,
    question:
      "During engine start the amber FAULT light on the ENG MASTER panel illuminates. This indicates:",
    options: [
      "A failure in the automatic start sequence.",
      "A failure of the ENG MODE SELECTOR.",
      "A failure in the engine fire extinguishing system.",
    ],
    answer: 0,
  },
  {
    id: 63,
    question:
      "Which steps of a manual start are being taken care of by the FADEC?",
    options: [
      "Starter valve closure and ignition cut off.",
      "Starter valve opening and ignition start.",
      "Starter valve closure and ignition start.",
      "Starter valve opening and ignition cut off.",
    ],
    answer: 0,
  },
  {
    id: 64,
    question: "Can Alpha-floor be disengaged while in Alpha Protection?",
    options: [
      "Yes, by manually disengaging the auto throttles.",
      "No, the system is designed to avoid such a disengagement.",
      "Yes, by reducing at idle one of the throttles (for more than 5 seconds).",
    ],
    answer: 0,
  },
];

//NAVIGATION part 1 ()//
///******CHECKED*/
export const qData17 = [
  {
    id: 1,
    question: "What are the different types of flight guidance?",
    options: [
      "Slaved and managed.",
      "Automatic and manual.",
      "Managed and selected.",
      "Managed and manual.",
    ],
    answer: 2,
  },
  {
    id: 2,
    question:
      "One A/P can be engaged on the ground if the engines are not running.",
    options: [
      "This A/P will disengage when both engines are started.",
      "This A/P will disengage when one engine is started.",
      "This A/P will disengage when speed is sensed at > 10 kts.",
    ],
    answer: 1,
  },
  {
    id: 3,
    question:
      "When the thrust levers are moved to the takeoff position, the FMGS updates its position at takeoff using:",
    options: [
      "IRS/DME/DME positioning.",
      "IRS/ILS/DME positioning.",
      "The navigation database and the takeoff runway entered into the MCDU by the pilot.",
      "The VOR/DME currently tuned.",
    ],
    answer: 2,
  },
  {
    id: 4,
    question: "The takeoff bias is:",
    options: [
      "Replaced when a bias is computed based on radio position.",
      "Retained for the remainder of the flight.",
      "Blended out over the next 30 minutes.",
    ],
    answer: 0,
  },
  {
    id: 5,
    question:
      "With the DATA selector set to HDG, the time remaining until the completed IRS alignment is displayed on the control display. How long does it take normally?",
    options: [
      "Approximately 1 minute",
      "Approximately 3 minutes",
      "Approximately 7 minutes",
      "Approximately 10 minutes",
    ],
    answer: 3,
  },
  {
    id: 6,
    question: "How does the FMGS derive Vapp?",
    options: [
      "Vapp=Vls+5+(1/3 surface headwind component).",
      "Vapp=Vls+10+1/3 surface headwind component.",
      "Vapp=Vls+5+1/2 surface headwind component.",
      "Vapp=Vls+10+1/2 surface headwind component.",
    ],
    answer: 0,
  },
  {
    id: 7,
    question:
      "When flying at cruise altitude, the aircraft navigates using radio navaids only.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 8,
    question:
      "The IR alignment countdown stops one minute prior to accomplishment and the ALIGN lights are flashing. Why does it happen?",
    options: [
      "It is an indication that there is a disagreement between the IRs and the alignment must be restarted.",
      "It is an indication that the alignment is complete but must be acknowledged.",
      "It is an indication that alignment has stopped as the present position data has not been entered from the FMGS.",
    ],
    answer: 2,
  },
  {
    id: 9,
    question: "What is managed climb speed below 10,000 feet?",
    options: [
      "Green dot.",
      "210 knots.",
      "250 knots.",
      "Best rate of climb speed.",
    ],
    answer: 2,
  },
  {
    id: 10,
    question:
      "The selected database date has expired. When must the active database be changed?",
    options: [
      "Prior to entering the preflight data.",
      "Anytime prior to takeoff.",
      "The following calendar day.",
    ],
    answer: 0,
  },
  {
    id: 11,
    question: "Which of the following navaids can be autotuned?",
    options: [
      "ILS and ADF (for NDB data base approaches).",
      "VOR and DME.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 12,
    question: "Cost Index = 0 (zero) corresponds to:",
    options: [
      "Minimum fuel consumption (max range)",
      "Minimum time.",
      "Best ratio between the flight time cost and the fuel cost.",
      "LRC (Long Range Cruise).",
    ],
    answer: 0,
  },
  {
    id: 13,
    question:
      "While taxiing on the ground, the FMGS displays the position of the aircraft using:",
    options: [
      "IRS and DME/DME.",
      "IRS only.",
      "IRS and VOR/DME.",
      "DME/DME and VOR/DME.",
    ],
    answer: 1,
  },
  {
    id: 14,
    question:
      "With the autopilot engaged, either sidestick can be moved freely.",
    options: [
      "True.",
      "False, moving either sidestick will cause the autopilot(s) to disengage.",
      "False, only the PNF’s sidestick will freely move.",
    ],
    answer: 1,
  },
  {
    id: 15,
    question: "When the aircraft is in the Managed Guidance mode, it is:",
    options: [
      "Guided by the pilot selecting the specific flight modes and parameter target values on the FCU.",
      "Responding to pilot inputs of speed, altitude, and heading selected on the FCU.",
      "Following lateral, vertical and speed profiles as determined by the IRS’S.",
      "Following lateral, vertical and speed profiles as determined by the FMGS.",
    ],
    answer: 3,
  },
  {
    id: 16,
    question: "What is managed climb speed above 10,000 feet?",
    options: ["Green dot.", "250 knots.", "280 knots.", "Econ climb speed."],
    answer: 3,
  },
  {
    id: 17,
    question: "An amber box on the MCDU screen indicates:",
    options: [
      "An optional data entry.",
      "A mandatory data entry.",
      "A compulsory reporting point.",
      "The waypoint indicated will be overflown.",
    ],
    answer: 1,
  },
  {
    id: 18,
    question: "Managed guidance is engaged by:",
    options: [
      "Pulling on the desired FCU selector knob.",
      "Pushing on the desired FCU selector knob.",
      "Rotating 90° the desired FCU selector knob.",
    ],
    answer: 1,
  },
  {
    id: 19,
    question: "What speed will the FMGS use in an Expedite climb?",
    options: [
      "Green dot speed.",
      "ECON climb speed.",
      "250 knots below 10,000 feet.",
      "Amber dot speed.",
    ],
    answer: 0,
  },
  {
    id: 20,
    question:
      "The weather radar image can be displayed on which modes of the ND?",
    options: [
      "Rose NAV or VOR.",
      "Rose VOR or Rose ILS.",
      "Rose NAV or ARC.",
      "All modes except Plan.",
    ],
    answer: 3,
  },
  {
    id: 21,
    question:
      "You have been cleared to intercept the localizer. You have pushed the LOC push button on the FCU. If all necessary data has been entered in the MCDU, can you now engage both autopilots?",
    options: [
      "No, the LOC must capture before both autopilots will engage.",
      "Yes.",
      "No, the APPR pushbutton must be pushed.",
    ],
    answer: 2,
  },
  {
    id: 22,
    question:
      "During a turnaround, you notice that there is a residual ground speed on both NDs. How do you correct this?",
    options: [
      "As the engines have been shut down, it is necessary to carry out a full re-alignment.",
      "There is no corrective action possible until the aircraft is completely electrically shut down.",
      "It is possible to carry out a rapid alignment by turning off all 3 ADIRS momentarily.",
    ],
    answer: 2,
  },
  {
    id: 23,
    question: "SRS will command:",
    options: [
      "V2 + 10 with both engines operating *",
      "V2 or current aircraft speed (whichever is higher) in the case of an engine failure.",
      "Best rate of climb taking into account actual wind component.",
    ],
    answer: 0,
  },
  {
    id: 24,
    question:
      "In flight, either the AP/FD pitch control, or autothrust may acquire and hold a target speed or Mach number, depending on the engaged modes. Speed control is “Managed” when the target comes from the SPD/MACH FCU window.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 25,
    question: "The FMGS data base contains:",
    options: [
      "Performance information, such as engine fuel flow, engine thrust, green dot data (L/D data), etc.",
      "Navigation information, such as navaids, waypoints, airways, airports, runways, etc.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 26,
    question:
      "If one GPS receiver fails, the three ADIRUs automatically select the only operative GPS receiver.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 27,
    question:
      "FMGC 1 is not working. To enter data into the FMGC, which MCDU would you use?",
    options: [
      "MCDU 1 on the Captain’s side.",
      "MCDU 2 on the First Officer’s side.",
      "Either MCDU 1 or MCDU 2.",
    ],
    answer: 2,
  },
  {
    id: 28,
    question: "The pilot interfaces with the FMGS using the:",
    options: ["FCU.", "Thrust Levers.", "MCDU.", "All of the above."],
    answer: 3,
  },
  {
    id: 29,
    question: "When is the SRS active?",
    options: [
      "During a Go Around (after the thrust levers are placed in the TOGA position) up to the acceleration altitude.",
      "At T/O, when TOGA or FLX power is set, SRS is displayed on the FMA and provides guidance up to the acceleration altitude.",
      "Both are correct.",
    ],
    answer: 3,
  },
  {
    id: 30,
    question:
      "The energy circle is a green arc, centered on the aircraft’s position and oriented towards the current track line. It is displayed on the NDs during descent, when HDG or TRK mode is selected.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 31,
    question:
      "Can the crew depress the RMP ON NAV pushbutton and use the RMP for navigation simultaneously with FMGC autotuning?",
    options: [
      "Yes, because the opposite FMGC will continue to autotune navaids.",
      "No, RMP backup tuning supersedes the autotuning function of both FMGC’s.",
    ],
    answer: 1,
  },
  {
    id: 32,
    question: "What do the white round lights on the FCU display mean?",
    options: [
      "Selected guidance has been engaged.",
      "Automatic guidance has been engaged.",
      "Managed guidance has been armed or engaged.",
    ],
    answer: 2,
  },
  {
    id: 33,
    question:
      "The Captain’s FMA indicates - FD2 in column five, line two. What does this mean?",
    options: [
      "FMGC #1 has “timed out” and flight guidance is lost.",
      "The First Officer has pushed the priority takeover pushbutton.",
      "FMGC #1 has “timed out” and FMGC #2 is now providing flight guidance for both pilots *",
      "The Captain’s FD pushbutton. on the FCU has not been selected “ON” and FD2 has automatically crossed over.",
    ],
    answer: 2,
  },
];
//NAVIGATION part 2 ()//
///******CHECKED*/
export const qData18 = [
  {
    id: 34,
    question:
      "During descent, if you push the Expedite (EXPED) push button, what speed will the aircraft try to maintain?",
    options: [
      "Green dot.",
      "340 knots",
      "3,000 fpm vertical speed.",
      "Standard 3.0 degrees angle of descent.",
    ],
    answer: 1,
  },
  {
    id: 35,
    question: "OPEN CLIMB (OP CLB) is a Managed mode.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 36,
    question:
      "If you have depressed the EXPED push button and want to cancel this function, how could this be accomplished?",
    options: [
      "Push the EXPED push button again.",
      "Pull the altitude, vertical speed, or speed knob.",
      "Retard the thrust levers to IDLE.",
    ],
    answer: 1,
  },
  {
    id: 37,
    question: "The LOC mode disengages when:",
    options: [
      "Another lateral mode is engaged.",
      "The pilot presses the LOC pushbutton again (engaging the HDG/TRK mode on the current HDG/TRK).",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 38,
    question:
      "Will the aircraft capture and navigate via the ILS signals if the ILS push button on the FCU is not pushed?",
    options: ["Yes *", "No."],
    answer: 0,
  },
  {
    id: 39,
    question:
      "The three Display Management Computers (DMCS) acquire and process all input from airplane sensors and computers to generate the display images.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 40,
    question:
      "The aircraft has _______ Air Data Inertial Reference Units (ADIRU’s).",
    options: ["2", "3", "4"],
    answer: 1,
  },
  {
    id: 41,
    question: "GPWS aural and visual warnings cannot be inhibited.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    id: 42,
    question:
      "Selection of the correct takeoff runway on the FMGC prior to each flight is necessary because:",
    options: [
      "The FADEC needs it to know how much to reduce the thrust for takeoff.",
      "Selection of the correct runway insures proper pressurization.",
      "Selection of the correct runway permits the FMGC to update its position at takeoff.",
    ],
    answer: 2,
  },
  {
    id: 43,
    question: "The two basic modes of flight guidance are:",
    options: [
      "Slaved and coupled.",
      "Managed and selected.",
      "Manual and coupled.",
    ],
    answer: 1,
  },
  {
    id: 44,
    question:
      "Both autopilots can be engaged and active in any phase of flight.",
    options: ["True", "False"],
    answer: 1,
  },
  {
    id: 45,
    question: "All navaids are normally autotuned by:",
    options: ["The FMGC", "MCDU", "ADIRU"],
    answer: 0,
  },
  {
    id: 46,
    question: "VOR data can be displayed on:",
    options: ["Both NDs", "The DDRMI", "First two statements are correct"],
    answer: 2,
  },
  {
    id: 47,
    question:
      "What is the preferred method of radio position updating for the FMGS?",
    options: ["VOR/DME", "ILS/DME", "DME/DME"],
    answer: 0,
  },
  {
    id: 48,
    question:
      "The windshear function of the FAC’s is independent of the flight director on/off switch.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 49,
    question:
      "All PFD displays except attitude; speed; heading; altitude; and vertical speed are removed when pitch attitude exceeds 25 degrees nose up or 13 degrees nose down.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 50,
    question:
      "Sidestick position and max. sidestick deflection are displayed on the ground on the PFD:",
    options: [
      "Continuously after aircraft power is applied.",
      "After the first engine start.",
      "On takeoff roll when power is applied.",
    ],
    answer: 1,
  },
  {
    id: 51,
    question: "The airspeed indication on the PFD starts at:",
    options: ["100 kts.", "80 kts", "50 kts.", "30 kts *"],
    answer: 3,
  },
  {
    id: 52,
    question:
      "The speed trend arrow on the PFD airspeed scale indicates the speed value that will be attained in _____ seconds if the acceleration remains constant.",
    options: ["5", "8", "10", "15"],
    answer: 2,
  },
  {
    id: 53,
    question: "Radio Height is displayed on the PFD:",
    options: [
      "Below 2500 feet.",
      "When the LOC or APPR p/b is pressed.",
      "When a Decision Height is selected.",
    ],
    answer: 0,
  },
  {
    id: 54,
    question:
      "The Armed Vertical Modes are displayed on the Flight Mode Annunciator on the second line in:",
    options: ["Blue or magenta.", "Blue or green.", "White"],
    answer: 0,
  },
  {
    id: 55,
    question:
      "ILS 1 information is displayed on ______ when operating in the rose ILS mode:",
    options: ["PFD 2 & ND 1", "PFD 1 & ND 1", "PFD 1 & ND 2"],
    answer: 2,
  },
  {
    id: 56,
    question:
      "When a double entry is needed on the MCDU (e.g. wind direction/speed: 270/110) the separating slash must be used. The trailing entry of a pair must be preceded by a slash if it is entered alone.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 57,
    question:
      "The Engaged Vertical Modes are displayed on the Flight Mode Annunciator on the first line in:",
    options: ["Green or Blue", "Green or Magenta", "Blue"],
    answer: 0,
  },
  {
    id: 58,
    question: "The ON BAT light on the ADIRS CDU illuminates:",
    options: [
      "Only when all IRU’s are on battery power.",
      "When an IRU fault is detected.",
      "When one or more ADIRU’s; are supplied by airplane battery only.",
    ],
    answer: 2,
  },
  {
    id: 59,
    question:
      "In the event of failure of the AIR DATA function of ADIRU 1 or 2; the affected displays can be manually selected over to ADR 3 by the:",
    options: [
      "ECAM/ND transfer selector.",
      "AIR DATA selector.",
      "ATT HDG selector.",
    ],
    answer: 1,
  },
  {
    id: 60,
    question: "Box prompts on the MCDU indicate data:",
    options: [
      "Entry is optional for FMGS operation.",
      "Entry is required for minimum FMGS operation.",
      "Will be filled in by the FMGS.",
    ],
    answer: 1,
  },
  {
    id: 61,
    question:
      "An FMGS message which requires immediate attention is displayed in:",
    options: ["Red", "Amber", "Magenta"],
    answer: 1,
  },
  {
    id: 62,
    question:
      "If the FLEX TEMP is not entered on the Takeoff Page of the MCDU:",
    options: [
      "A FLX takeoff is still available; set power with the thrust levers.",
      "The FMGS will enter it for you based on TAT.",
      "A FLX takeoff is not available.",
    ],
    answer: 2,
  },
  {
    id: 63,
    question: "Zero Fuel Weight is entered on:",
    options: ["Init B page.", "Prog page.", "Perf page."],
    answer: 0,
  },
  {
    id: 64,
    question:
      "If the SPD/MACH knob on the FCU is not pulled within a predetermined time to engage selected speed:",
    options: [
      "The selection can be made at any time.",
      "The selection is lost and dashes are re-displayed.",
      "The selection is lost and the display goes blank.",
    ],
    answer: 1,
  },
  {
    id: 65,
    question: "When the altitude knob on the FCU is pulled:",
    options: [
      "The altitude is armed.",
      "The current altitude is canceled.",
      "OPEN CLIMB or DESCENT engages.",
    ],
    answer: 2,
  },
  {
    id: 66,
    question:
      "The Standby Attitude indication will remain available for ______ minutes after total electrical failure.",
    options: ["5", "7", "10", "22"],
    answer: 0,
  },
];

//FIRE PROTECTION //
export const qData19 = [
  {
    id: 1,
    question:
      "The avionics compartment is the only area where there is no fire extinguishing system installed.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 2,
    question: "Engine fire loops are installed in the:",
    options: ["Pylon nacelle", "Core", "Fan", "All the above"],
    answer: 3,
  },
  {
    id: 3,
    question:
      "If a break in both engine fire loops occurs within _____ seconds of each other a _____ will occur.",
    options: [
      "8 sec./ a FIRE warning",
      "7 sec./ a FIRE DET FAULT message on ECAM",
      "10 sec./ a FIRE DET FAULT message on ECAM",
      "5 sec./ a FIRE warning",
    ],
    answer: 3,
  },
  {
    id: 4,
    question:
      "The aircraft has dual fire detector loops to ensure that a fault in one fire loop will not affect fire detection capabilities.",
    options: ["True", "False"],
    answer: 0,
  },
  {
    id: 5,
    question: "If there is an APU fire in flight the APU:",
    options: [
      "Will automatically shut down and the fire bottle will discharge.",
      "Must be shut down manually and the agent manually discharged.",
      "Must be shut down manually but the fire bottle will discharge automatically.",
    ],
    answer: 1,
  },
  {
    id: 6,
    question: "Fire protection for the cargo compartments includes:",
    options: [
      "Two fire bottles; one for each compartment.",
      "One single shot fire extinguisher for the aft compartment only.",
      "One single shot fire extinguisher agents which can be discharged to either compartment.",
    ],
    answer: 2,
  },
  {
    id: 7,
    question: "The engine extinguishing agent switch is armed when:",
    options: [
      "The DISCH light is on.",
      "The engine fire switch illuminates.",
      "The engine fire switch is released out.",
    ],
    answer: 2,
  },
  {
    id: 8,
    question: "When the APU FIRE SWITCH is released out:",
    options: [
      "The Fire bottle is discharged.",
      "The Fuel HP valve is closed.",
      "The APU bleed and crossbleed valves are closed.",
    ],
    answer: 2,
  },
  {
    id: 9,
    question:
      "DISCH light on either the engine or APU fire agent switches indicates:",
    options: [
      "The APU or engine FIRE switch has been pushed.",
      "The extinguisher bottle has been discharged.",
      "A fault has occurred in the respective fire bottle.",
    ],
    answer: 1,
  },
  {
    id: 10,
    question: "The GEN 1 LINE smoke light indicates:",
    options: [
      "A fire caused by number 1 generator.",
      "Smoke in the avionics ventilation system.",
      "Smoke in the cargo ventilation system.",
    ],
    answer: 1,
  },
  {
    id: 11,
    question: "Can the APU FIRE test be performed using battery power only?",
    options: ["Yes.", "No."],
    answer: 0,
  },
  {
    id: 12,
    question:
      "When the aircraft is on the ground and the APU is started on battery power only, is fire protection available?",
    options: [
      "Yes, the APU will initiate an auto shutdown and discharge the extinguishing agent.",
      "No, but the APU will initiate an auto shutdown.",
      "No, automatic fire protection is only available if AC power is available.",
    ],
    answer: 0,
  },
  {
    id: 13,
    question:
      "How many fire extinguishing bottles are available for fighting an APU fire?",
    options: [
      "One.",
      "Two.",
      "One cylinder shared with the aft cargo compartment.",
      "Two cylinders shared with the aft cargo compartment.",
    ],
    answer: 0,
  },
  {
    id: 14,
    question: "APU fire detection is accomplished by:",
    options: [
      "A two channel SDCU located in the APU compartment.",
      "Two parallel fire detection loops.",
      "One fire detection loop.",
      "A three channel SDCU located in the APU compartment.",
    ],
    answer: 1,
  },
  {
    id: 15,
    question:
      "Engine heat sensing are located in pylon nacelle, engine core and fan section.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 16,
    question:
      "After an APU fire has been detected how long will the chime continue to sound?",
    options: [
      "Until the crew pushes the red MASTER WARN push button.",
      "Until the crew pushes and releases the guarded red APU FIRE push button.",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 17,
    question: "STATUS page: INOP SYS indicates “ENG1 LOOP B”.",
    options: [
      "One fire detection loop has failed. Fire detection for both engines is not available.",
      "One detection loop for engine 1 has failed. Fire detection for both engines is still available.",
      "One fire detection loop of engine 1 has failed. Fire detection for engine 1 is inoperative.",
      "Both fire detection loops of engine 1 have failed. Fire detection for engine 1 is inoperative.",
    ],
    answer: 1,
  },
  {
    id: 18,
    question:
      "Which of the following have automatic fire extinguishing systems?",
    options: [
      "APU, and lavatory waste bins.",
      "APU, lavatory waste bins and avionics bay.",
      "APU, aft cargo, forward cargo, lavatory waste bins and avionics bay.",
      "APU, forward and aft cargo, lavatory and waste bins.",
    ],
    answer: 0,
  },
  {
    id: 19,
    question: "The aft cargo compartment smoke detection system consists of:",
    options: [
      "A dual loop smoke detector.",
      "Four smoke detectors and a two channel smoke detection control unit.",
      "One smoke detector, one smoke detection control unit and two automatically discharging fire extinguishers.",
      "Three smoke detectors, one smoke detection control unit and two automatically discharging fire extinguishers.",
    ],
    answer: 1,
  },
  {
    id: 20,
    question:
      "If an engine fire is detected, when will the pedestal mounted red FIRE annunciator light extinguish?",
    options: [
      "When the crew pushes the red MASTER WARN push button.",
      "Only after the fire warning no longer exists.",
      "Only after the crew selects the adjacent ENG MASTER switch to off.",
    ],
    answer: 1,
  },
  {
    id: 21,
    question:
      "How long will the red APU FIRE pb on the overhead be illuminated?",
    options: [
      "Until the crew pushes and releases the guarded red APU FIRE push button.",
      "For as long as the fire warning is present.",
      "Until the crew pushes the red MASTER WARN push button.",
    ],
    answer: 1,
  },
  {
    id: 22,
    question:
      "With reference to cargo compartment fire extinguishing, which statement is true?",
    options: [
      "There are two fire bottles, one for the FWD compartment and one for the AFT.",
      "There is only one fire bottle, pressing either DISCH pushbutton discharges it into both compartments.",
      "There is only one fire bottle, when it is discharged both amber DISCH lights come on.",
      "There are two fire bottles, when the DISCH pushbutton is pressed, they are both discharged into the appropriate compartment.",
    ],
    answer: 2,
  },
  {
    id: 23,
    question:
      "Should you lose both loops or FDU, fire detection is no longer available for the respective engine or the APU",
    options: ["True", "False."],
    answer: 0,
  },
  {
    id: 24,
    question:
      "What is indicated by a missing red APU thermal plug during an exterior preflight?",
    options: [
      "This is normal indication, the red APU thermal plug only appears if the APU halon cylinder is low.",
      "An APU fire agent thermal discharge has occurred.",
      "An external fire discharge has been activated.",
    ],
    answer: 1,
  },
  {
    id: 25,
    question:
      "If an engine fire is detected, when will the guarded red ENG FIRE push button light extinguish?",
    options: [
      "Only after the fire warning no longer exists.",
      "When the crew pushes and releases the guarded red ENGINE FIRE pushbutton.",
      "When the crew pushes the red MASTER WARN pushbutton.",
      "When the crew pushes the red MASTER WARN pushbutton and then releases the guarded ENGINE FIRE pushbutton.",
    ],
    answer: 0,
  },
  {
    id: 26,
    question: "In the event a lavatory smoke detector detects smoke:",
    options: [
      "Warnings will be generated only in the cockpit.",
      "Warnings will be generated only on the flight deck.",
      "Warnings will be generated in the cockpit and in the cabin.",
    ],
    answer: 2,
  },
  {
    id: 27,
    question:
      "Are there any warnings to alert ground personnel when there is a fire in the APU compartment?",
    options: [
      "Yes, but only if previously selected to automatic by the ground personnel.",
      "No, APU fire indications are only present in the cockpit.",
      "Yes, the external fire warning horn will sound and the APU red fire light will illuminate.",
    ],
    answer: 2,
  },
  {
    id: 28,
    question:
      "What systems are affected when the guarded red ENGINE FIRE push button is pushed and released?",
    options: [
      "The Master Warning and the chime will be canceled and the AGENT pb’s will be armed.",
      "All fluids, pneumatics and electrics relating to that engine are shut off",
      "Both are correct.",
    ],
    answer: 2,
  },
  {
    id: 29,
    question: "The avionics smoke detection system consists of the following:",
    options: [
      "A smoke detector, smoke detection control unit and one halon cylinder.",
      "A smoke detector, and smoke detection control unit.",
      "A smoke detector, heat detector, smoke detection control unit and one halon cylinder.",
      "A smoke detector, smoke detection control unit and two halon cylinders.",
    ],
    answer: 1,
  },
  {
    id: 30,
    question: "Will an APU fire test shut down the APU?",
    options: ["Yes.", "No."],
    answer: 1,
  },
  {
    id: 31,
    question: "Illumination of the GEN 1 LINE SMOKE light indicates:",
    options: [
      "A fire has been detected in the avionics compartment.",
      "A satisfactory test of the avionics compartment smoke detection control unit.",
      "Smoke has been detected in the avionics compartment ventilation duct.",
      "A fire has been detected in the electronics compartment.",
    ],
    answer: 2,
  },
  {
    id: 32,
    question:
      "In the event an aft cargo compartment smoke detector detects smoke:",
    options: [
      "Extinguishing is automatic.",
      "Extinguishing is automatic only while on the ground.",
      "The crew must depress the appropriate DISCH switch.",
    ],
    answer: 2,
  },
  {
    id: 33,
    question:
      "How many halon fire extinguishing cylinders are there per engine?",
    options: [
      "Each engine has two fire extinguishers.",
      "Each engine has its own dedicated fire extinguisher and has the capability to share the other engine’s cylinder.",
      "Each engine has its own dedicated fire extinguisher and has the capability to share one centrally located halon cylinder.",
      "Each engine has one fire extinguisher.",
    ],
    answer: 0,
  },
  {
    id: 34,
    question: "The APU provides for automatic fire extinguishing:",
    options: [
      "On the ground only.",
      "On the ground and in flight.",
      "Only when selected to automatic by ground personnel.",
    ],
    answer: 0,
  },
  {
    id: 35,
    question:
      "You have detected avionics smoke. You have selected the GEN 1 LINE push button off and the RAT has been deployed. Generator 2 has been removed from the system. Which of the following is TRUE?",
    options: [
      "The cargo fire bottle automatically fires.",
      "The avionics fire bottle automatically discharges.",
      "The aircraft will be in the Emergency Electrical Configuration.",
    ],
    answer: 2,
  },
  {
    id: 36,
    question:
      "In conjunction with illumination of the GEN 1 LINE SMOKE light and MASTER CAUT light:",
    options: [
      "The BLOWER and EXTRACT push button FAULT lights will be illuminated.",
      "Only the BLOWER FAULT light will be illuminated.",
      "Only the EXTRACT FAULT light will be illuminated.",
    ],
    answer: 0,
  },
  {
    id: 37,
    question:
      "After depressing the CARGO SMOKE TEST push button once, a satisfactory test of the aft cargo compartment smoke detector consist of:",
    options: [
      "Two complete cycles with associated warnings.",
      "Not needed as this system self-tests during the first engine start.",
      "One complete cycle with associated warnings.",
      "Three complete cycles with associated warnings.",
    ],
    answer: 0,
  },
  {
    id: 38,
    question:
      "How does the APU fire test on battery power differ from the APU fire test with all busses powered?",
    options: [
      "There is no difference.",
      "While on battery power, only the red APU FIRE and AGENT/DISCH push button will illuminate.",
      "It is not possible to test the APU fire protection while on battery power.",
    ],
    answer: 1,
  },
  {
    id: 39,
    question:
      "If you perform the APU FIRE TEST with only DC power available, you get the MASTER WARN on the ECAM.",
    options: ["True.", "False."],
    answer: 1,
  },
  {
    id: 40,
    question:
      "In the event an aft cargo compartment smoke detector detects smoke:",
    options: [
      "Only an ECAM message will be generated.",
      "Only a MASTER WARN and a CRC will be generated.",
      "A MASTER WARN, CRC and an ECAM message will be generated.",
      "A CRC and an ECAM message will be generated.",
    ],
    answer: 2,
  },
  {
    id: 41,
    question:
      "During the walk-around, you have to check that the APU Fire extinguisher overpressure indication (green disc) is in place. This is an indication that the fire bottle has not been discharged.",
    options: ["True", "False *"],
    answer: 1,
  },
  {
    id: 42,
    question:
      "The AFT SMOKE light closes the aft cargo inlet and outlet isolation valves and shuts off the aft cargo extraction fan.",
    options: ["True.", "False."],
    answer: 0,
  },
  {
    id: 43,
    question: "Each lavatory is equipped with:",
    options: [
      "Two smoke detectors and one smoke detection control unit.",
      "One smoke detector and one smoke detection control unit.",
      "One smoke detector, and for lavatory waste bins, an automatically discharging fire extinguisher.",
      "Two smoke detectors and two automatically discharging fire extinguishers.",
    ],
    answer: 2,
  },
  {
    id: 44,
    question: "Each engine nacelle and pylon area is equipped with:",
    options: [
      "Two fire detection loops.",
      "A single fire detection loop.",
      "Two smoke detectors and two fire detection loops.",
      "A single fire detection loop and a single smoke detector.",
    ],
    answer: 0,
  },
  {
    id: 45,
    question:
      "In addition to the CRC and red MASTER WARN light, a good engine fire test will display which of the following (AC power available)?",
    options: [
      "The CRC and red MASTER WARN light indicate a positive engine fire test.",
      "Lower ECAM engine page, pedestal mounted red FIRE annunciator, red ENG FIRE push button and the AGENT SQUIB/DISC lights illuminate.",
      "E/WD red 1 (2) ENG FIRE warning, lower ECAM engine page, red FIRE annunciator, red ENG FIRE push button, and AGENT SQUIB/DISCH.",
    ],
    answer: 2,
  },
  {
    id: 46,
    question:
      "If an APU fire is detected on the ground, the APU shuts down automatically and the agent is discharged ______ after the warning is activated.",
    options: ["Immediately", "1 second", "3 seconds", "6 seconds"],
    answer: 2,
  },
  {
    id: 47,
    question: "Where is the avionics compartment smoke detector installed?",
    options: [
      "On the air extraction duct",
      "In the forward cargo bay",
      "Adjacent to the blower fan",
    ],
    answer: 0,
  },
  {
    id: 48,
    question: "What is the avionics smoke detector connected to?",
    options: [
      "The Smoke Detector Control Unit (SDCU)",
      "The Avionics Equipment Ventilation Computer (AEVC)",
      "The Fire Detection Unit (FDU)",
    ],
    answer: 1,
  },
  {
    id: 49,
    question:
      "What happens when the fire detection unit detects fire on Loop A and fault on Loop B?",
    options: [
      "The fire warnings are displayed",
      "Loop B is disconnected",
      "Loop A is disconnected",
    ],
    answer: 0,
  },
  {
    id: 50,
    question:
      "Where can we see the status of the lavatory smoke detector on the Enhanced aircraft?",
    options: [
      "On the PTP (Programming and Test Panel)",
      "On the FAP (Flight Attendant Panel) Smoke Detector page",
      "On E/WD (Engine Warning Display) in the cockpit",
    ],
    answer: 1,
  },
  {
    id: 51,
    question: "What can be found on the lower vent grid on the fan case?",
    options: [
      "The nacelle temperature sensor",
      "The thrust reverser isolation Control Unit (ICU)",
      "One pair of the detector elements",
    ],
    answer: 2,
  },
];

////////////////////////////////////////////////////////

//FLIGHT CONTROLS part 1 ()//
export const qData20 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
];
//FLIGHT CONTROLS part 2 ()//
export const qData21 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
];

//INDICATING / RECORDING part 1 ()//
export const qData22 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
];
//INDICATING / RECORDING part 2 ()//
export const qData23 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
];

//ELECTRICAL part 1 ()//
export const qData24 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
]; //ELECTRICAL part 2 ()//
export const qData25 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
];

//COMMUNICATION part 1 ()//
export const qData26 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
];
//COMMUNICATION part 2 ()//
export const qData27 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
];

//LANDING GEAR part 1 ()//
export const qData28 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
];
//LANDING GEAR part 2 ()//
export const qData29 = [
  {
    id: 11,
    question: "",
    options: ["", "", ""],
    answer: 0,
  },
];
