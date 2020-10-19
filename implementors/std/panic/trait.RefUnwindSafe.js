(function() {var implementors = {};
implementors["actix"] = [{"text":"impl RefUnwindSafe for SpawnHandle","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for Addr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; !RefUnwindSafe for Recipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for WeakAddr&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; !RefUnwindSafe for WeakRecipient&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for Context&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, I, E&gt; !RefUnwindSafe for ActorResponse&lt;A, I, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, T&gt; !RefUnwindSafe for AtomicResponse&lt;A, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; RefUnwindSafe for MessageResult&lt;M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;M as Message&gt;::Result: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;I, E&gt; !RefUnwindSafe for Response&lt;I, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for Supervisor&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActorState","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Running","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MailboxError","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for ContextParts&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, C&gt; !RefUnwindSafe for ContextFut&lt;A, C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; RefUnwindSafe for SendError&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for AddressSender&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for AddressReceiver&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for Envelope&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, M&gt; !RefUnwindSafe for Request&lt;A, M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;M&gt; !RefUnwindSafe for RecipientRequest&lt;M&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for Mailbox&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for Mocker&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Resolve","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Connect","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ConnectAddr","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Resolver","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for TcpConnector","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ResolverError","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; RefUnwindSafe for Finish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, F&gt; RefUnwindSafe for Map&lt;A, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, A&gt; RefUnwindSafe for Ready&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E, A&gt; RefUnwindSafe for FutureResult&lt;T, E, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; RefUnwindSafe for StreamFinish&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, Fut, T&gt; RefUnwindSafe for StreamFold&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Fut as IntoActorFuture&gt;::Future: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F&gt; RefUnwindSafe for StreamMap&lt;S, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, F, U&gt; RefUnwindSafe for StreamThen&lt;S, F, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;U as IntoActorFuture&gt;::Future: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !RefUnwindSafe for StreamTimeout&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A, B, F&gt; RefUnwindSafe for Then&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as IntoActorFuture&gt;::Future: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; !RefUnwindSafe for Timeout&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F, A&gt; RefUnwindSafe for FutureWrap&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S, A&gt; RefUnwindSafe for StreamWrap&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, B&gt; RefUnwindSafe for Either&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, E&gt; !RefUnwindSafe for Writer&lt;T, E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, T, U&gt; !RefUnwindSafe for FramedWrite&lt;I, T, U&gt;","synthetic":true,"types":[]},{"text":"impl&lt;I, S&gt; !RefUnwindSafe for SinkWrite&lt;I, S&gt;","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Registry","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for SystemRegistry","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for SyncArbiter&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for SyncContext&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !RefUnwindSafe for Condition&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for TimerFunc&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; !RefUnwindSafe for IntervalFunc&lt;A&gt;","synthetic":true,"types":[]}];
implementors["client"] = [{"text":"impl !RefUnwindSafe for ChatClient","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ClientCommand","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChatCodec","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ClientChatCodec","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChatRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChatResponse","synthetic":true,"types":[]}];
implementors["server"] = [{"text":"impl !RefUnwindSafe for Server","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for TcpConnect","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChatCodec","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ClientChatCodec","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChatRequest","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ChatResponse","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Connect","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Disconnect","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ListRooms","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Join","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ChatServer","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Message","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for ChatSession","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()