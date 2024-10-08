import React from "react";
import {Navigate} from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      console.log(this.state.error);
      return (
        <Navigate to={"/"} state={{
          messageToast: {
            type: "error",
            message: "Lỗi " + this.state.error.message
          },
        }}/>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;