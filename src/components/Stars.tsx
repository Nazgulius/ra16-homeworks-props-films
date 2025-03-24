interface StarProps {  
  count: number;  
} 

export default function Star({ count }: StarProps) {

  if (count < 1 || count > 5) {
    console.log("Рейтинг может быть от 1 до 5 звёзд.");
    return;
  }

  const star: React.ReactElement = (
    <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
      <path d="M0 0h18v18H0z" fill="none" />
    </svg>
  );
  
  const arrayStars: React.ReactElement[] = Array.from({ length: count }, (_, index) => (  
    <li key={index}>{star}</li>  
  ));

  return (
    <>
      <ul className="card-body-stars u-clearfix">
        {arrayStars}        
      </ul>
    </>
  );
}
