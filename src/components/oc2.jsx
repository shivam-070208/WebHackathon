import "../oc2Style.css";

export default function Oc2() {
    return (
        <div class="container">
        
        <div class="header-text">
            <p>Intensity measured by kgCO<sub>2</sub>e/m<sup>2</sup></p>
        </div>

        <div class="content-layout">

            <div class="targets-section">
                
                <div class="target-line">
                    <span class="line-style dashed"></span>
                    <span>500&nbsp;kgCO<sub>2</sub>e/m<sup>2</sup> - Embodied Carbon Target 2030</span>
                </div>

                <div class="target-line">
                    <span class="line-style solid"></span>
                    <span>600&nbsp;kgCO<sub>2</sub>e/m<sup>2</sup> - Embodied Carbon Target 2025</span>
                </div>

            </div>

            <div class="download-section">
                <a href="#" class="download-link">
                    Download the data
                    <span class="download-icon-circle">
                        <span class="arrow-down"></span>
                    </span>
                </a>
            </div>

        </div>

    </div>

    );
}
