class Hello extends React.Component {
    render() {
        return (
            <div>
                <div className={"first_class " + (this.state.val ? "true_class" : "false_class") + " another_class" }>First Method</div>
                <div className={`container box ${this.state.something}`}>Second Method</div>
                <div className={'container box ' + this.state.something}>Third Method</div>
            </div>
        );
    }
}