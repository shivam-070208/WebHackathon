import CarbonEmissions from "./carbonEmissions";
import Embodied from "./embodied";

export default function C2() {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <Embodied />
            <CarbonEmissions />
        </div>
    );
}
