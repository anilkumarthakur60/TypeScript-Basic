import { ReactNode } from 'react'

type SectionProps = {
    title?: string,
    children: ReactNode
}


export const Section = ({ children, title = 'hello world' }: SectionProps) => {
    return (
        <section>

            <p>
                {children}
            </p>
            <h2>
                {title}
            </h2>
        </section>
    );
}


// export const Section: React.FC<{ title: string }> = ({ title, children }) => {

//     return (
//         <section>
//             <h2>{title}</h2>
//             <p>
//                 {children}
//             </p>
//         </section>
//     )

// }


// export default function Section() {
//     return (
//         <div>Section</div>
//     )
// }
