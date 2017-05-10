import { expect } from 'chai';
import React from 'react';
import PodcastList from '../client/src/components/PodcastList.jsx';
import PodcastListEntry from '../client/src/components/PodcastListEntry.jsx';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import fakePodcastData from './testdata/fakePodcastData.js'


describe('PodcastList', function() {

  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(PodcastList)).to.be.false;
  });

  it('should render one `PodcastListEntry` when given one podcast', function() {
    var oneFakePodcast = fakePodcastData.slice(-1);
    const renderer = new ReactShallowRenderer();

    renderer.render(
      <PodcastList podcasts={oneFakePodcast} />
    );

    var podcastList = renderer.getRenderOutput();
    console.log(podcastList);

    expect(podcastList.props.children).to.have.length(1);
    podcastList.props.children.forEach(child => expect(child.type).to.equal(PodcastListEntry));

  });

});
