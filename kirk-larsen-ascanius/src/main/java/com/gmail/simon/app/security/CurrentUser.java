package com.gmail.simon.app.security;

import com.gmail.simon.backend.data.entity.User;

@FunctionalInterface
public interface CurrentUser {

	User getUser();
}
