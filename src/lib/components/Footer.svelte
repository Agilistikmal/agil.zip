<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="bg-gradient-to-b from-night via-night to-dark relative overflow-hidden">
	<!-- Decorative elements -->
	<div
		class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-grape/50 to-transparent"
	></div>
	<div
		class="absolute bottom-0 right-20 w-80 h-80 bg-amaranth/10 blur-3xl rounded-full opacity-30"
	></div>
	<div
		class="absolute top-20 left-20 w-60 h-60 bg-moonstone/10 blur-3xl rounded-full opacity-20"
	></div>

	<div class="w-full max-w-screen-xl mx-auto min-h-96 pt-20 pb-32 px-8 relative z-10">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
			<!-- Branding -->
			<div class="mx-0 md:mx-auto">
				<div class="flex items-center gap-4 mb-4">
					<img
						src="/logo/agil.zip.white.png"
						alt="agil.zip logo"
						class="w-16 hover:scale-105 transition-transform duration-300"
					/>
					<div>
						<h3 class="text-gradient from-amethyst to-colombiablue font-bold">agil.zip</h3>
						<p class="text-white/80">Agil Ghani Istikmal</p>
					</div>
				</div>
				<p class="text-white/60 text-sm mt-4 max-w-xs">
					A versatile fullstack developer who loves creating cutting-edge web and mobile
					applications.
				</p>
			</div>

			<!-- Navigation -->
			<div class="mx-0 md:mx-auto">
				<h4 class="font-semibold mb-4 flex items-center gap-2 text-white">
					<div class="h-1 w-4 bg-gradient-to-r from-moonstone to-celeste rounded-full"></div>
					Related Links
				</h4>
				<ul class="mt-4 space-y-3">
					<li>
						<a
							href="https://safatanc.com"
							target="_blank"
							class="flex items-center gap-2 text-white/80 hover:text-gradient from-moonstone to-colombiablue transition duration-500 group"
						>
							<Icon
								icon="uim:arrow-up-right"
								width="20"
								height="20"
								class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
							/>
							<span class="group-hover:translate-x-1 transition-transform duration-300"
								>SAFATANC CORP</span
							>
						</a>
					</li>
					<li>
						<a
							href="https://gprestore.net"
							target="_blank"
							class="flex items-center gap-2 text-white/80 hover:text-gradient from-moonstone to-colombiablue transition duration-500 group"
						>
							<Icon
								icon="uim:arrow-up-right"
								width="20"
								height="20"
								class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
							/>
							<span class="group-hover:translate-x-1 transition-transform duration-300"
								>GPrestore</span
							>
						</a>
					</li>
					<li>
						<a
							href="https://tipspace.org"
							target="_blank"
							class="flex items-center gap-2 text-white/80 hover:text-gradient from-moonstone to-colombiablue transition duration-500 group"
						>
							<Icon
								icon="uim:arrow-up-right"
								width="20"
								height="20"
								class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
							/>
							<span class="group-hover:translate-x-1 transition-transform duration-300"
								>Tipspace</span
							>
						</a>
					</li>
					<li>
						<a
							href="https://verdex.id"
							target="_blank"
							class="flex items-center gap-2 text-white/80 hover:text-gradient from-moonstone to-colombiablue transition duration-500 group"
						>
							<Icon
								icon="uim:arrow-up-right"
								width="20"
								height="20"
								class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
							/>
							<span class="group-hover:translate-x-1 transition-transform duration-300">Verdex</span
							>
						</a>
					</li>
				</ul>
			</div>

			<!-- Contact -->
			<div class="mx-0 md:mx-auto">
				<h4 class="font-semibold mb-4 flex items-center gap-2 text-white">
					<div class="h-1 w-4 bg-gradient-to-r from-saffron to-tomato rounded-full"></div>
					Contact
				</h4>
				<ul class="mt-4 space-y-3">
					<li>
						<a
							href="mailto:contact@agil.zip"
							class="flex items-center gap-2 text-white/80 hover:text-gradient from-saffron to-tomato transition duration-500 group"
						>
							<Icon
								icon="logos:google-gmail"
								width="20"
								height="20"
								class="group-hover:scale-110 transition-transform duration-300"
							/>
							<span class="group-hover:translate-x-1 transition-transform duration-300"
								>contact@agil.zip</span
							>
						</a>
					</li>
					<li>
						<a
							href="mailto:agil_g@safatanc.com"
							class="flex items-center gap-2 text-white/80 hover:text-gradient from-saffron to-tomato transition duration-500 group"
						>
							<Icon
								icon="logos:google-gmail"
								width="20"
								height="20"
								class="group-hover:scale-110 transition-transform duration-300"
							/>
							<span class="group-hover:translate-x-1 transition-transform duration-300"
								>agil_g@safatanc.com</span
							>
						</a>
					</li>
					<li>
						<a
							href="https://discord.com/users/287539662614953985"
							target="_blank"
							class="flex items-center gap-2 text-white/80 hover:text-gradient from-saffron to-tomato transition duration-500 group"
						>
							<Icon
								icon="logos:discord-icon"
								width="20"
								height="20"
								class="group-hover:scale-110 transition-transform duration-300"
							/>
							<span class="group-hover:translate-x-1 transition-transform duration-300"
								>@agilistikmal</span
							>
						</a>
					</li>
				</ul>

				<div class="flex gap-4 mt-6 text-white">
					<a
						href="https://github.com/agilistikmal"
						target="_blank"
						class="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors duration-300 hover:scale-110 transform border border-white/10"
					>
						<Icon icon="uil:github" width="20" height="20" />
					</a>
					<a
						href="https://linkedin.com/in/agilistikmal"
						target="_blank"
						class="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors duration-300 hover:scale-110 transform border border-white/10"
					>
						<Icon icon="uil:linkedin" width="20" height="20" />
					</a>
					<a
						href="mailto:contact@agil.zip"
						class="bg-white/5 p-2 rounded-full hover:bg-white/10 transition-colors duration-300 hover:scale-110 transform border border-white/10"
					>
						<Icon icon="uil:envelope" width="20" height="20" />
					</a>
				</div>
			</div>
		</div>

		<div class="mt-16 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
			<p>© {new Date().getFullYear()} Agil Ghani Istikmal. All rights reserved.</p>
		</div>
	</div>
</footer>
