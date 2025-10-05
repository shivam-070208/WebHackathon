import React from 'react';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    ReferenceLine
} from 'recharts';

// --- Data Preparation ---
// The chart requires careful structuring because bars are paired, and the color 
// for each bar within the pair is independent of its position (1 or 2).
// To achieve this in Recharts, we define four distinct data keys:
// barX_light and barX_dark. Only one of these will have a non-null value per group.
const data = [
  // G1: 549 (L), 278 (L)
  { id: 1, label: '', bar1_light: 549, bar1_dark: null, bar2_light: 278, bar2_dark: null }, 
  // G2: 617 (D), 875 (D)
  { id: 2, label: '', bar1_light: null, bar1_dark: 617, bar2_light: null, bar2_dark: 875 },
  // G3: 506 (D), 36 (L)
  { id: 3, label: 'Gap 1', bar1_light: null, bar1_dark: 506, bar2_light: 36, bar2_dark: null }, 
  
  // G4: 135 (L), 191 (L)
  { id: 4, label: '', bar1_light: 135, bar1_dark: null, bar2_light: 191, bar2_dark: null }, 
  // G5: 122 (L), 560 (D)
  { id: 5, label: '', bar1_light: 122, bar1_dark: null, bar2_light: null, bar2_dark: 560 }, 
  // G6: 981 (D), 539 (D)
  { id: 6, label: 'Gap 2', bar1_light: null, bar1_dark: 981, bar2_light: null, bar2_dark: 539 }, 
  
  // G7: 269 (L), 29 (D)
  { id: 7, label: '', bar1_light: 269, bar1_dark: null, bar2_light: null, bar2_dark: 29 }, 
  // G8: 82 (D), 44 (L)
  { id: 8, label: '', bar1_light: null, bar1_dark: 82, bar2_light: 44, bar2_dark: null }, 
  // G9: 109 (L), 106 (L)
  { id: 9, label: 'Gap 3', bar1_light: 109, bar1_dark: null, bar2_light: 106, bar2_dark: null }, 
  
  // G10: 607 (D), 528 (D)
  { id: 10, label: '', bar1_light: null, bar1_dark: 607, bar2_light: null, bar2_dark: 528 }, 
];

// --- Constants ---
const COLORS = {
    CHART_BG: '#EFEAE4',
    TEXT_COLOR_DARK: '#444444',
    TEXT_COLOR_LIGHT: '#666666',
    LIGHT_BAR: '#A17B79',
    DARK_BAR: '#684746',
};

const CHART_HEIGHT = 400;
const Y_AXIS_DOMAIN = [0, 1200];
const Y_AXIS_TICKS = [0, 200, 400, 600, 800, 1000, 1200];

// --- Custom Components ---

// Custom Label component to display the non-null value on top of the bar
const CustomBarLabel = ({ x, y, width, value }) => {
    // Only render label if the bar has a value (i.e., height > 0)
    if (value > 0) {
        return (
            <text x={x + width / 2} y={y - 5} fill={COLORS.TEXT_COLOR_DARK} textAnchor="middle" fontSize={12} fontWeight="500">
                {value}
            </text>
        );
    }
    return null;
};

// Custom YAxis Tick component for the label text rotation
const CustomYAxisLabel = () => {
    return (
        <text 
            x={-CHART_HEIGHT / 2} 
            y={-70} // Position to the left of the axis
            dy={-4}
            fill={COLORS.TEXT_COLOR_LIGHT}
            textAnchor="middle"
            transform={`rotate(-90)`}
            fontSize={14}
            fontWeight="400"
        >
            Embodied carbon Intensity ($kgCO_2e/m^2$)
        </text>
    );
};


// --- Main Component ---
const App = () => {
    // Increased barSize to 50 for a very thick appearance
    const barSize = 50; 

    return (
        <div 
            className="p-8 w-full min-h-screen" 
            style={{ backgroundColor: COLORS.CHART_BG, fontFamily: 'Inter, sans-serif' }}
        >
            <div>
            <span style={{ display: "inline-block", transform: "rotate(-90deg) translateX(-200px)" ,}}>
                 Embodied Carbon Intensity(kgCO<sub>2</sub>e/m<sup>2</sup>)
            </span>
            </div>
            <h1 className="sr-only">Embodied Carbon Intensity Bar Chart</h1>
            <div className="w-full h-full max-w-[1100px] mx-auto">
                <ResponsiveContainer width="100%" height={CHART_HEIGHT + 50}>
                    <BarChart
                        data={data}
                        barCategoryGap={3} // Gap between bars in a pair
                        margin={{ top: 30, right: 20, left: 100, bottom: 5 }} // Left margin for rotated Y-axis label
                    >
                        {/* * CartesianGrid for subtle horizontal lines (Grid lines at 200, 400, 800, 1000)
                         * We only use the solid lines to match the image grid lines (excluding 600 and 500 targets)
                         */}
                        <CartesianGrid 
                            vertical={false} 
                            stroke="rgba(0, 0, 0, 0.1)" // Lighter grid line color
                            strokeDasharray="0" // Solid lines for the grid
                            y={{ ticks: Y_AXIS_TICKS.filter(t => t !== 600 && t !== 500 && t !== 0 && t !== 1200), domain: Y_AXIS_DOMAIN }}
                        />

                        {/* X-Axis is invisible but provides the base line */}
                        <XAxis 
                            dataKey="id" 
                            axisLine={{ stroke: '#999' }} // Softer X-axis line color
                            tick={false} // Hide group ticks
                        />

                        {/* Y-Axis configuration */}
                        <YAxis
                            orientation="left"
                            domain={Y_AXIS_DOMAIN}
                            ticks={Y_AXIS_TICKS}
                            tickLine={false} // Hide small tick marks
                            axisLine={{ stroke: '#999' }} // Softer Y-axis line color
                            tick={{ fill: COLORS.TEXT_COLOR_LIGHT, fontSize: 12 }} // Lighter text for numbers
                            label={<CustomYAxisLabel />}
                        />
                        
                        {/* Target Line 600 (Solid, Darker) */}
                        <ReferenceLine y={600} stroke={COLORS.TEXT_COLOR_DARK} strokeWidth={1.5} is="true" />

                        {/* Target Line 500 (Dashed, Lighter) */}
                        <ReferenceLine y={500} stroke="#999" strokeDasharray="5 5" strokeWidth={1} is="true" />
                        
                        {/* Tooltip for hover functionality (optional) */}
                        <Tooltip 
                            contentStyle={{ backgroundColor: COLORS.CHART_BG, border: `1px solid ${COLORS.TEXT_COLOR_DARK}` }}
                            formatter={(value, name) => [value, `Group ${name.split('_')[0]}`]}
                        />

                        {/*
                         * Bar 1: Light and Dark (These will overlap/cluster on the first position)
                         * Only one will have a value (the other is null)
                         */}
                        <Bar 
                            dataKey="bar1_light" 
                            fill={COLORS.LIGHT_BAR} 
                            barSize={barSize} 
                            label={<CustomBarLabel />}
                        />
                        <Bar 
                            dataKey="bar1_dark" 
                            fill={COLORS.DARK_BAR} 
                            barSize={barSize} 
                            label={<CustomBarLabel />}
                        />
                        
                        {/*
                         * Bar 2: Light and Dark (These will overlap/cluster on the second position)
                         * The tight clustering of all four keys creates the two distinct, adjacent bars.
                         */}
                        <Bar 
                            dataKey="bar2_light" 
                            fill={COLORS.LIGHT_BAR} 
                            barSize={barSize} 
                            label={<CustomBarLabel />}
                        />
                        <Bar 
                            dataKey="bar2_dark" 
                            fill={COLORS.DARK_BAR} 
                            barSize={barSize} 
                            label={<CustomBarLabel />}
                        />
                        
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default App;