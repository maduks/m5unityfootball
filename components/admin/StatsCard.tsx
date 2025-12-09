interface StatsCardProps {
    title: string;
    value: number | string;
    icon: string;
    colorClass: string;
}

const StatsCard = ({ title, value, icon, colorClass }: StatsCardProps) => {
    return (
        <div className="stat-card">
            <div className={`stat-icon ${colorClass}`}>
                <i className={`fas ${icon}`}></i>
            </div>
            <div className="stat-info">
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
        </div>
    );
};

export default StatsCard;
