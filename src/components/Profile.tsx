interface ProfileProps {
    name: string;
    bios: string;
    location: string;
}

export default function Profile (props: ProfileProps) {
    
    const { name, bios , location } = props
     return (
        <section id="profile">
            
            <h2>{name}</h2>
            <h2>{bios}</h2>
            <h2>Localização:{location}</h2>
            

        </section>
    )
}