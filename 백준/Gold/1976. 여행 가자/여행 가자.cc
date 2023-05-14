#include <bits/stdc++.h>
using namespace std;
int parent[100005];
int n, m;
int cnt = 0;
bool connect = true;
vector <int> v;

void make_set(int n) {
	for (int i = 1; i <= n; i++) {
		parent[i] = i;
	}
}

int find(int i) {
	if (parent[i] == i) {
		return i;
	}
	parent[i] = find(parent[i]);
	return (parent[i]);
}

void merge(int a, int b) {
	a = find(a); b = find(b);
	parent[a] = b;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	cin >> n;
	cin >> m;
	make_set(n);
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			int x;
			cin >> x;
			if (x == 1) {
				merge(i, j);
			}
		}
	}
	for (int i = 0; i < m; i++) {
		int x;
		cin >> x;
		v.push_back(x);
	}
	for (auto it = v.begin(); it != v.end() - 1; it++) {
		if (find(*it) != find(*(it + 1))) {
			connect = false;
		}
	}
	if (connect == true) {
		cout << "YES";
	}
	else {
		cout << "NO";
	}
}
