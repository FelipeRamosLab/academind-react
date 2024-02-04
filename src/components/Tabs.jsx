export default function Tabs({ buttons, ButtonsContainer, children }) {
    return (<>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
    </>);
}