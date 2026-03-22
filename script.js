const elements = [
    // Period 1
    { num: 1, sym: "H", name: "Hydrogen", col: 1, row: 1, cat: "other-nonmetal", conf: "1s¹" },
    { num: 2, sym: "He", name: "Helium", col: 18, row: 1, cat: "noble-gas", conf: "1s²" },

    // Period 2
    { num: 3, sym: "Li", name: "Lithium", col: 1, row: 2, cat: "alkali", conf: "[He] 2s¹" },
    { num: 4, sym: "Be", name: "Beryllium", col: 2, row: 2, cat: "alkaline", conf: "2s²" },
    { num: 5, sym: "B", name: "Boron", col: 13, row: 2, cat: "other-nonmetal", conf: "2s² 2p¹" },
    { num: 6, sym: "C", name: "Carbon", col: 14, row: 2, cat: "other-nonmetal", conf: "2s² 2p²" },
    { num: 7, sym: "N", name: "Nitrogen", col: 15, row: 2, cat: "other-nonmetal", conf: "2s² 2p³" },
    { num: 8, sym: "O", name: "Oxygen", col: 16, row: 2, cat: "other-nonmetal", conf: "2s² 2p⁴" },
    { num: 9, sym: "F", name: "Fluorine", col: 17, row: 2, cat: "halogen", conf: "2s² 2p⁵" },
    { num: 10, sym: "Ne", name: "Neon", col: 18, row: 2, cat: "noble-gas", conf: "2s² 2p⁶" },

    // Period 3
    { num: 11, sym: "Na", name: "Sodium", col: 1, row: 3, cat: "alkali", conf: "[Ne] 3s¹" },
    { num: 12, sym: "Mg", name: "Magnesium", col: 2, row: 3, cat: "alkaline", conf: "3s²" },
    { num: 13, sym: "Al", name: "Aluminium", col: 13, row: 3, cat: "other-metal", conf: "3s² 3p¹" },
    { num: 14, sym: "Si", name: "Silicon", col: 14, row: 3, cat: "other-nonmetal", conf: "3s² 3p²" },
    { num: 15, sym: "P", name: "Phosphorus", col: 15, row: 3, cat: "other-nonmetal", conf: "3s² 3p³" },
    { num: 16, sym: "S", name: "Sulfur", col: 16, row: 3, cat: "other-nonmetal", conf: "3s² 3p⁴" },
    { num: 17, sym: "Cl", name: "Chlorine", col: 17, row: 3, cat: "halogen", conf: "3s² 3p⁵" },
    { num: 18, sym: "Ar", name: "Argon", col: 18, row: 3, cat: "noble-gas", conf: "3s² 3p⁶" },

    // Period 4 (Transition Metals start)
    { num: 19, sym: "K", name: "Potassium", col: 1, row: 4, cat: "alkali", conf: "[Ar] 4s¹" },
    { num: 20, sym: "Ca", name: "Calcium", col: 2, row: 4, cat: "alkaline", conf: "4s²" },
    { num: 21, sym: "Sc", name: "Scandium", col: 3, row: 4, cat: "transition", conf: "3d¹ 4s²" },
    { num: 22, sym: "Ti", name: "Titanium", col: 4, row: 4, cat: "transition", conf: "3d² 4s²" },
    { num: 23, sym: "V", name: "Vanadium", col: 5, row: 4, cat: "transition", conf: "3d³ 4s²" },
    { num: 24, sym: "Cr", name: "Chromium", col: 6, row: 4, cat: "transition", conf: "3d⁵ 4s¹" },
    { num: 25, sym: "Mn", name: "Manganese", col: 7, row: 4, cat: "transition", conf: "3d⁵ 4s²" },
    { num: 26, sym: "Fe", name: "Iron", col: 8, row: 4, cat: "transition", conf: "3d⁶ 4s²" },
    { num: 27, sym: "Co", name: "Cobalt", col: 9, row: 4, cat: "transition", conf: "3d⁷ 4s²" },
    { num: 28, sym: "Ni", name: "Nickel", col: 10, row: 4, cat: "transition", conf: "3d⁸ 4s²" },
    { num: 29, sym: "Cu", name: "Copper", col: 11, row: 4, cat: "transition", conf: "3d¹⁰ 4s¹" },
    { num: 30, sym: "Zn", name: "Zinc", col: 12, row: 4, cat: "transition", conf: "3d¹⁰ 4s²" },
    { num: 31, sym: "Ga", name: "Gallium", col: 13, row: 4, cat: "other-metal", conf: "3d¹⁰ 4s² 4p¹" },
    { num: 32, sym: "Ge", name: "Germanium", col: 14, row: 4, cat: "other-metal", conf: "3d¹⁰ 4s² 4p²" },
    { num: 33, sym: "As", name: "Arsenic", col: 15, row: 4, cat: "other-nonmetal", conf: "3d¹⁰ 4s² 4p³" },
    { num: 34, sym: "Se", name: "Selenium", col: 16, row: 4, cat: "other-nonmetal", conf: "3d¹⁰ 4s² 4p⁴" },
    { num: 35, sym: "Br", name: "Bromine", col: 17, row: 4, cat: "halogen", conf: "4s² 4p⁵" },
    { num: 36, sym: "Kr", name: "Krypton", col: 18, row: 4, cat: "noble-gas", conf: "4s² 4p⁶" },

    // Period 5
    { num: 37, sym: "Rb", name: "Rubidium", col: 1, row: 5, cat: "alkali", conf: "[Kr] 5s¹" },
    { num: 38, sym: "Sr", name: "Strontium", col: 2, row: 5, cat: "alkaline", conf: "5s²" },
    { num: 39, sym: "Y", name: "Yttrium", col: 3, row: 5, cat: "transition", conf: "4d¹ 5s²" },
    { num: 40, sym: "Zr", name: "Zirconium", col: 4, row: 5, cat: "transition", conf: "4d² 5s²" },
    { num: 41, sym: "Nb", name: "Niobium", col: 5, row: 5, cat: "transition", conf: "4d⁴ 5s¹" },
    { num: 42, sym: "Mo", name: "Molybdenum", col: 6, row: 5, cat: "transition", conf: "4d⁵ 5s¹" },
    { num: 43, sym: "Tc", name: "Technetium", col: 7, row: 5, cat: "transition", conf: "4d⁵ 5s²" },
    { num: 44, sym: "Ru", name: "Ruthenium", col: 8, row: 5, cat: "transition", conf: "4d⁷ 5s¹" },
    { num: 45, sym: "Rh", name: "Rhodium", col: 9, row: 5, cat: "transition", conf: "4d⁸ 5s¹" },
    { num: 46, sym: "Pd", name: "Palladium", col: 10, row: 5, cat: "transition", conf: "4d¹⁰" },
    { num: 47, sym: "Ag", name: "Silver", col: 11, row: 5, cat: "transition", conf: "4d¹⁰ 5s¹" },
    { num: 48, sym: "Cd", name: "Cadmium", col: 12, row: 5, cat: "transition", conf: "4d¹⁰ 5s²" },
    { num: 49, sym: "In", name: "Indium", col: 13, row: 5, cat: "other-metal", conf: "4d¹⁰ 5s² 5p¹" },
    { num: 50, sym: "Sn", name: "Tin", col: 14, row: 5, cat: "other-metal", conf: "4d¹⁰ 5s² 5p²" },
    { num: 51, sym: "Sb", name: "Antimony", col: 15, row: 5, cat: "other-metal", conf: "4d¹⁰ 5s² 5p³" },
    { num: 52, sym: "Te", name: "Tellurium", col: 16, row: 5, cat: "other-nonmetal", conf: "4d¹⁰ 5s² 5p⁴" },
    { num: 53, sym: "I", name: "Iodine", col: 17, row: 5, cat: "halogen", conf: "5s² 5p⁵" },
    { num: 54, sym: "Xe", name: "Xenon", col: 18, row: 5, cat: "noble-gas", conf: "5s² 5p⁶" },

    // Period 6 (Element 57 sits here, 58-71 go to Row 9)
    { num: 55, sym: "Cs", name: "Cesium", col: 1, row: 6, cat: "alkali", conf: "[Xe] 6s¹" },
    { num: 56, sym: "Ba", name: "Barium", col: 2, row: 6, cat: "alkaline", conf: "6s²" },
    { num: 57, sym: "La", name: "Lanthanum", col: 3, row: 6, cat: "rare-earth", conf: "5d¹ 6s²" },
    { num: 72, sym: "Hf", name: "Hafnium", col: 4, row: 6, cat: "transition", conf: "4f¹⁴ 5d² 6s²" },
    { num: 73, sym: "Ta", name: "Tantalum", col: 5, row: 6, cat: "transition", conf: "4f¹⁴ 5d³ 6s²" },
    { num: 74, sym: "W", name: "Tungsten", col: 6, row: 6, cat: "transition", conf: "4f¹⁴ 5d⁴ 6s²" },
    { num: 75, sym: "Re", name: "Rhenium", col: 7, row: 6, cat: "transition", conf: "4f¹⁴ 5d⁵ 6s²" },
    { num: 76, sym: "Os", name: "Osmium", col: 8, row: 6, cat: "transition", conf: "4f¹⁴ 5d⁶ 6s²" },
    { num: 77, sym: "Ir", name: "Iridium", col: 9, row: 6, cat: "transition", conf: "4f¹⁴ 5d⁷ 6s²" },
    { num: 78, sym: "Pt", name: "Platinum", col: 10, row: 6, cat: "transition", conf: "4f¹⁴ 5d⁹ 6s¹" },
    { num: 79, sym: "Au", name: "Gold", col: 11, row: 6, cat: "transition", conf: "4f¹⁴ 5d¹⁰ 6s¹" },
    { num: 80, sym: "Hg", name: "Mercury", col: 12, row: 6, cat: "transition", conf: "4f¹⁴ 5d¹⁰ 6s²" },
    { num: 81, sym: "Tl", name: "Thallium", col: 13, row: 6, cat: "other-metal", conf: "4f¹⁴ 5d¹⁰ 6s² 6p¹" },
    { num: 82, sym: "Pb", name: "Lead", col: 14, row: 6, cat: "other-metal", conf: "4f¹⁴ 5d¹⁰ 6s² 6p²" },
    { num: 83, sym: "Bi", name: "Bismuth", col: 15, row: 6, cat: "other-metal", conf: "4f¹⁴ 5d¹⁰ 6s² 6p³" },
    { num: 84, sym: "Po", name: "Polonium", col: 16, row: 6, cat: "other-metal", conf: "4f¹⁴ 5d¹⁰ 6s² 6p⁴" },
    { num: 85, sym: "At", name: "Astatine", col: 17, row: 6, cat: "halogen", conf: "6s² 6p⁵" },
    { num: 86, sym: "Rn", name: "Radon", col: 18, row: 6, cat: "noble-gas", conf: "6s² 6p⁶" },

    // Period 7 (Element 89 sits here, 90-103 go to Row 10)
    { num: 87, sym: "Fr", name: "Francium", col: 1, row: 7, cat: "alkali", conf: "[Rn] 7s¹" },
    { num: 88, sym: "Ra", name: "Radium", col: 2, row: 7, cat: "alkaline", conf: "7s²" },
    { num: 89, sym: "Ac", name: "Actinium", col: 3, row: 7, cat: "actinoid", conf: "6d¹ 7s²" },
    { num: 104, sym: "Rf", name: "Rutherfordium", col: 4, row: 7, cat: "transition", conf: "[Rn] 5f¹⁴ 6d² 7s²" },
    { num: 105, sym: "Db", name: "Dubnium", col: 5, row: 7, cat: "transition", conf: "5f¹⁴ 6d³ 7s²" },
    { num: 106, sym: "Sg", name: "Seaborgium", col: 6, row: 7, cat: "transition", conf: "5f¹⁴ 6d⁴ 7s²" },
    { num: 107, sym: "Bh", name: "Bohrium", col: 7, row: 7, cat: "transition", conf: "5f¹⁴ 6d⁵ 7s²" },
    { num: 108, sym: "Hs", name: "Hassium", col: 8, row: 7, cat: "transition", conf: "5f¹⁴ 6d⁶ 7s²" },
    { num: 109, sym: "Mt", name: "Meitnerium", col: 9, row: 7, cat: "transition", conf: "5f¹⁴ 6d⁷ 7s²" },
    { num: 110, sym: "Ds", name: "Darmstadtium", col: 10, row: 7, cat: "transition", conf: "5f¹⁴ 6d⁸ 7s²" },
    { num: 111, sym: "Rg", name: "Roentgenium", col: 11, row: 7, cat: "transition", conf: "5f¹⁴ 6d⁹ 7s²" },
    { num: 112, sym: "Cn", name: "Copernicium", col: 12, row: 7, cat: "transition", conf: "5f¹⁴ 6d¹⁰ 7s²" },
    { num: 113, sym: "Nh", name: "Nihonium", col: 13, row: 7, cat: "other-metal", conf: "5f¹⁴ 6d¹⁰ 7s² 7p¹" },
    { num: 114, sym: "Fl", name: "Flerovium", col: 14, row: 7, cat: "other-metal", conf: "5f¹⁴ 6d¹⁰ 7s² 7p²" },
    { num: 115, sym: "Mc", name: "Moscovium", col: 15, row: 7, cat: "other-metal", conf: "5f¹⁴ 6d¹⁰ 7s² 7p³" },
    { num: 116, sym: "Lv", name: "Livermorium", col: 16, row: 7, cat: "other-metal", conf: "5f¹⁴ 6d¹⁰ 7s² 7p⁴" },
    { num: 117, sym: "Ts", name: "Tennessine", col: 17, row: 7, cat: "halogen", conf: "7s² 7p⁵" },
    { num: 118, sym: "Og", name: "Oganesson", col: 18, row: 7, cat: "noble-gas", conf: "7s² 7p⁶" },

    // Lanthanoids (Floating Row 1)
    { num: 58, sym: "Ce", name: "Cerium", col: 4, row: 9, cat: "rare-earth", conf: "4f¹ 5d¹ 6s²" },
    { num: 59, sym: "Pr", name: "Praseodymium", col: 5, row: 9, cat: "rare-earth", conf: "4f³ 6s²" },
    { num: 60, sym: "Nd", name: "Neodymium", col: 6, row: 9, cat: "rare-earth", conf: "4f⁴ 6s²" },
    { num: 61, sym: "Pm", name: "Promethium", col: 7, row: 9, cat: "rare-earth", conf: "4f⁵ 6s²" },
    { num: 62, sym: "Sm", name: "Samarium", col: 8, row: 9, cat: "rare-earth", conf: "4f⁶ 6s²" },
    { num: 63, sym: "Eu", name: "Europium", col: 9, row: 9, cat: "rare-earth", conf: "4f⁷ 6s²" },
    { num: 64, sym: "Gd", name: "Gadolinium", col: 10, row: 9, cat: "rare-earth", conf: "4f⁷ 5d¹ 6s²" },
    { num: 65, sym: "Tb", name: "Terbium", col: 11, row: 9, cat: "rare-earth", conf: "4f⁹ 6s²" },
    { num: 66, sym: "Dy", name: "Dysprosium", col: 12, row: 9, cat: "rare-earth", conf: "4f¹⁰ 6s²" },
    { num: 67, sym: "Ho", name: "Holmium", col: 13, row: 9, cat: "rare-earth", conf: "4f¹¹ 6s²" },
    { num: 68, sym: "Er", name: "Erbium", col: 14, row: 9, cat: "rare-earth", conf: "4f¹² 6s²" },
    { num: 69, sym: "Tm", name: "Thulium", col: 15, row: 9, cat: "rare-earth", conf: "4f¹³ 6s²" },
    { num: 70, sym: "Yb", name: "Ytterbium", col: 16, row: 9, cat: "rare-earth", conf: "4f¹⁴ 6s²" },
    { num: 71, sym: "Lu", name: "Lutetium", col: 17, row: 9, cat: "rare-earth", conf: "4f¹⁴ 5d¹ 6s²" },

    // Actinoids (Floating Row 2)
    { num: 90, sym: "Th", name: "Thorium", col: 4, row: 10, cat: "actinoid", conf: "6d² 7s²" },
    { num: 91, sym: "Pa", name: "Protactinium", col: 5, row: 10, cat: "actinoid", conf: "5f² 6d¹ 7s²" },
    { num: 92, sym: "U", name: "Uranium", col: 6, row: 10, cat: "actinoid", conf: "5f³ 6d¹ 7s²" },
    { num: 93, sym: "Np", name: "Neptunium", col: 7, row: 10, cat: "actinoid", conf: "5f⁴ 6d¹ 7s²" },
    { num: 94, sym: "Pu", name: "Plutonium", col: 8, row: 10, cat: "actinoid", conf: "5f⁶ 7s²" },
    { num: 95, sym: "Am", name: "Americium", col: 9, row: 10, cat: "actinoid", conf: "5f⁷ 7s²" },
    { num: 96, sym: "Cm", name: "Curium", col: 10, row: 10, cat: "actinoid", conf: "5f⁷ 6d¹ 7s²" },
    { num: 97, sym: "Bk", name: "Berkelium", col: 11, row: 10, cat: "actinoid", conf: "5f⁹ 7s²" },
    { num: 98, sym: "Cf", name: "Californium", col: 12, row: 10, cat: "actinoid", conf: "5f¹⁰ 7s²" },
    { num: 99, sym: "Es", name: "Einsteinium", col: 13, row: 10, cat: "actinoid", conf: "5f¹¹ 7s²" },
    { num: 100, sym: "Fm", name: "Fermium", col: 14, row: 10, cat: "actinoid", conf: "5f¹² 7s²" },
    { num: 101, sym: "Md", name: "Mendelevium", col: 15, row: 10, cat: "actinoid", conf: "5f¹³ 7s²" },
    { num: 102, sym: "No", name: "Nobelium", col: 16, row: 10, cat: "actinoid", conf: "5f¹⁴ 7s²" },
    { num: 103, sym: "Lr", name: "Lawrencium", col: 17, row: 10, cat: "actinoid", conf: "5f¹⁴ 7s¹ 7p¹" }
];

const container = document.getElementById('table-container');

elements.forEach(el => {
    // Create the main element div
    const div = document.createElement('div');
    div.className = `element ${el.cat}`;
    div.style = `--col: ${el.col}; --row: ${el.row};`;

    // Fill it with content
    div.innerHTML = `
        <div class="at-num">${el.num}</div>
        <div class="symbol">${el.sym}</div>
        <div class="config">${el.conf}</div>
        <div class="tooltip">
            <strong>${el.name}</strong><br>
            Atomic Number: ${el.num}<br>
            Configuration: ${el.conf}
        </div>
    `;

    container.appendChild(div);
});