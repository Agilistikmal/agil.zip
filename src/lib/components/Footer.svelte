<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="bg-night text-white">
	<div class="w-full max-w-screen-xl mx-auto min-h-96 pt-16 pb-48 px-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
			<!-- Branding -->
			<div class="mx-0 md:mx-auto">
				<div class="flex items-center gap-2">
					<img src="/logo/agil.zip.png" alt="" class="w-24" />
					<div>
						<h3 class="text-amethyst">agil.zip</h3>
						<p>Agil Ghani Istikmal</p>
					</div>
				</div>
			</div>

			<!-- Navigation -->
			<div class="mx-0 md:mx-auto">
				<h4>Related Links</h4>
				<ul class="mt-2">
					<li>
						<a
							href="https://safatanc.com"
							target="_blank"
							class="flex items-center gap-2 hover:text-amethyst transition duration-500"
						>
							<Icon icon="uim:arrow-up-right" width="24" height="24" />
							<span>SAFATANC CORP</span>
						</a>
					</li>
					<li>
						<a
							href="https://gprestore.net"
							target="_blank"
							class="flex items-center gap-2 hover:text-amethyst transition duration-500"
						>
							<Icon icon="uim:arrow-up-right" width="24" height="24" />
							<span>GPrestore</span>
						</a>
					</li>
					<li>
						<a
							href="https://tipspace.org"
							target="_blank"
							class="flex items-center gap-2 hover:text-amethyst transition duration-500"
						>
							<Icon icon="uim:arrow-up-right" width="24" height="24" />
							<span>Tipspace</span>
						</a>
					</li>
					<li>
						<a
							href="https://verdex.id"
							target="_blank"
							class="flex items-center gap-2 hover:text-amethyst transition duration-500"
						>
							<Icon icon="uim:arrow-up-right" width="24" height="24" />
							<span>Verdex</span>
						</a>
					</li>
				</ul>
			</div>

			<!-- Contact -->
			<div class="mx-0 md:mx-auto">
				<h4>Contact</h4>
				<ul class="mt-2">
					<li>
						<a
							href="mailto:contact@agil.zip"
							class="flex items-center gap-2 hover:text-amethyst transition duration-500"
						>
							<Icon icon="logos:google-gmail" width="24" height="24" />
							<span>contact@agil.zip</span>
						</a>
					</li>
					<li>
						<a
							href="mailto:agil_g@safatanc.com"
							class="flex items-center gap-2 hover:text-amethyst transition duration-500"
						>
							<Icon icon="logos:google-gmail" width="24" height="24" />
							<span>agil_g@safatanc.com</span>
						</a>
					</li>
					<li>
						<a
							href="https://discord.com/users/287539662614953985"
							target="_blank"
							class="flex items-center gap-2 hover:text-amethyst transition duration-500"
						>
							<Icon icon="logos:discord-icon" width="24" height="24" />
							<span>@agilistikmal</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
