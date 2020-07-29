import  ProfileStatus  from "./ProfileStatus";

describe("Button component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="yo man" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("yo man");
  });
  test("status from props should be in the state rrr", () => {
    const component = create(<ProfileStatus status="yo man" />);
    const root = component.root;
    let span = root.findByType('span')
    expect(span.length).toBe("yo man");
  });
});