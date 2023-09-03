const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <p>2nd level layout</p>
      {children}
    </div>
  );
}

export default layout