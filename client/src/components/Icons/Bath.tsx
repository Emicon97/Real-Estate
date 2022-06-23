import React, { DOMAttributes } from 'react'
// import classNames from 'classnames'

// export interface IIconProps extends DOMAttributes<HTMLDivElement> {
//     className?: string;
//     type: IconType;
// }

const BathIcon = ({...props}: React.SVGProps<SVGSVGElement>) => (
    <svg 
        version="1.1" 
        id="Capa_1" 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" 
        y="0px"
        width={19}
        height={19}
        fill="#444"
        viewBox="0 0 72.113 72.113">
    <g>
   <path d="M63.14,33.247H35.453V6.827C35.453,3.062,32.39,0,28.624,0H12.887C9.122,0,6.059,3.063,6.059,6.827v27.86
       c0,0.247,0.02,0.489,0.045,0.729c-0.077,0.266-0.131,0.541-0.131,0.83v5.105c0,0.247,0.03,0.486,0.087,0.716
       c0.771,6.112,4.62,13.455,10.59,16.583v1.574c-1.858,1.126-3.074,3.16-3.074,5.469c0,3.539,2.879,6.42,6.419,6.42h27.58
       c3.539,0,6.418-2.881,6.418-6.42c0-3.313-2.521-6.047-5.746-6.384c11.502-2.53,16.434-10.44,17.148-17.63l0.715-5.01
       c0.122-0.861-0.135-1.733-0.705-2.391C64.836,33.623,64.009,33.247,63.14,33.247z M12.887,6h15.737
       c0.457,0,0.829,0.371,0.829,0.827v26.42H12.059V6.827C12.059,6.371,12.431,6,12.887,6z M59.448,40.9
       c-0.008,0.046-0.014,0.093-0.018,0.138c-0.342,3.566-2.641,11.971-16.596,13.002c-1.014,0.074-1.92,0.658-2.408,1.55
       c-0.489,0.891-0.493,1.969-0.012,2.864l2.822,5.244c0.521,0.973,1.537,1.578,2.641,1.578h1.697c0.23,0,0.418,0.188,0.418,0.42
       c0,0.23-0.188,0.418-0.418,0.418h-27.58c-0.231,0-0.419-0.188-0.419-0.418c0-0.234,0.193-0.381,0.375-0.397
       c1.533-0.155,2.699-1.445,2.699-2.985v-5.633c0-1.293-0.829-2.441-2.057-2.848c-4.506-1.493-8.091-7.819-8.613-12.793
       c-0.002-0.021-0.005-0.045-0.008-0.067v-1.726H59.68L59.448,40.9z"/>
    </g>
    </svg>
)

export default BathIcon