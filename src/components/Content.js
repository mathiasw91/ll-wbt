import React from "react"


class Content extends React.Component {

  render() {
    let activeTheme = this.props.chapters[this.props.activeChapter].themes[this.props.activeTheme]
    const SpecificPage = activeTheme.page
    return (<div id="content-wrapper">
      <SpecificPage />
    </div>)
  }
}

export default Content
