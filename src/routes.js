import React from 'react';
import { Route, Switch} from 'react-router-dom';
import HomePage from './components/views/HomePage';
import PostPreviewPage from './components/views/PostPreviewPage';
import AuthorPage from './components/views/AuthorPage';
import CreatePostPage from './components/views/CreatePostPage';

export default (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/post' component={PostPreviewPage} />
        <Route path='/new-post' component={CreatePostPage} />
        <Route path='/author' component={AuthorPage} />
    </Switch>
)